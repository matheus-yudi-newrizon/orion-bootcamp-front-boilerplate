import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';
import { emailPattern } from '../form-register/form-register.component';

@Component({
  selector: 'app-modal-forgot-password',
  templateUrl: './modal-forgot-password.component.html',
  styleUrls: ['./modal-forgot-password.component.scss']
})
export class ModalForgotPasswordComponent {
  protected forgotPasswordForm!: FormGroup;

  constructor(
    private el: ElementRef,
    private formBuilder: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<ModalForgotPasswordComponent>
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(emailPattern)]]
    });
  }

  /**
   * Função responsável por fechar o modal quando o botão "cancel" for acionado.
   */
  public closeModal(): void {
    this.dialogRef.close();
  }

  /**
   * Função responsável por acessar o campo de e-mail do formulário.
   */
  public get email(): FormControl {
    return this.forgotPasswordForm.get('email') as FormControl;
  }

  /**
   * Envia a solicitação de redefinição de senha para o e-mail fornecido.
   */
  public async forgotPassword(): Promise<void> {
    if (this.forgotPasswordForm.valid) {
      try {
        await this.userService.forgotPassword(this.forgotPasswordForm.value);
      } catch (error) {
        console.error('Error requesting password reset:', error);
      }
    }
  }
}
