import { UserService } from 'src/app/services/user/user.service';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalForgotPasswordComponent } from 'src/app/components/modal-forgot-password/modal-forgot-password.component';
import { emailPattern } from '../../components/form-register/form-register.component';
import { ErrorResponse } from 'src/app/models/http/interface';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Atributos públicos
  public hide = true;
  public errorMessage = '';
  public signInForm!: FormGroup;

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      password: ['', [Validators.required, Validators.min(3)]],
      rememberMe: [false]
    });
  }

  // Método público para obter o controle de email
  public get emailInput(): AbstractControl | null {
    return this.signInForm.get('email');
  }

  // Método público para obter o controle de senha
  public get passwordInput(): AbstractControl | null {
    return this.signInForm.get('password');
  }

  /**
   * Método público para realizar alguma ação quando o formulário é submetido.
   * Por exemplo, você pode adicionar aqui a lógica para o login.
   */
  public async submit(): Promise<void> {
    // Lógica de submissão do formulário
    if (this.signInForm.valid) {
      try {
        const loginResponse = await this.userService.login(this.signInForm.value);
        this.router.navigate(['/start-game']);
        /** Salvar o token do usuário ao fazer login */
        if (loginResponse.data) this.tokenService.save(loginResponse.data.token);
      } catch (error) {
        this.errorMessage = `Error on login: ${(error as ErrorResponse).message}`;
      }
    }
  }

  /**
   * Função responsável por abrir o modal de forgotPassword
   */
  public openModalForgot(): void {
    const dialogRef = this.dialog.open(ModalForgotPasswordComponent, {
      width: '500px',
      height: '100%',
      panelClass: 'custom__modal',
      disableClose: false,
      position: {
        right: '0'
      },
      exitAnimationDuration: 6000
    });

    dialogRef.beforeClosed().subscribe(() => {
      dialogRef.addPanelClass('modal__closed');
    });
  }
}
