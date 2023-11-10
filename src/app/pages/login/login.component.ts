import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalForgotPasswordComponent } from 'src/app/components/modal-forgot-password/modal-forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // Atributos públicos
  public hide = true;
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3)]),
  });

  constructor(public dialog: MatDialog) { }

  // Método público para obter o controle de email
  public get emailInput() {
    return this.signin.get('email');
  }

  // Método público para obter o controle de senha
  public get passwordInput() {
    return this.signin.get('password');
  }

  /**
   * Método público para realizar alguma ação quando o formulário é submetido.
   * Por exemplo, você pode adicionar aqui a lógica para o login.
   */
  public submit() {
    // Lógica de submissão do formulário
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
        right: '0',
      },
      exitAnimationDuration: 6000,
    });

    dialogRef.beforeClosed().subscribe(() => {
      dialogRef.addPanelClass('modal__closed');
    });
  }
}
