import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-modal-forgot-password',
  templateUrl: './modal-forgot-password.component.html',
  styleUrls: ['./modal-forgot-password.component.scss']
})

export class ModalForgotPasswordComponent {
  public emailPattern = /^[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  protected forgotPasswordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, public dialogRef: MatDialogRef<ModalForgotPasswordComponent>) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
    });
  }

  /**
   * Função responsável por fechar o modal quando o botão "cancel" for acionado.
   */
  public closeModal(): void {
    this.dialogRef.close();
  }

  /**
   * Função responsável por submeter o formulário e, em caso de ser inválido, não retornar nada
   */
  public submit(): void {
    if (!this.forgotPasswordForm.valid) {
      return;
    }
  }

  /**
   * Função responsável por acessar o campo de e-mail do formulário
  */
  public get email(): FormControl {
    return this.forgotPasswordForm.get('email') as FormControl;
  }


  /**
   * Envia a solicitação de redefinição de senha para o e-mail fornecido
   */
  public async forgotPassword(): Promise<void> {
    if (this.forgotPasswordForm.valid) {
      try {
        await this.userService.forgotPassword(this.forgotPasswordForm.value);
      } catch (error) {
        console.error("Error requesting password reset:", error);
      }
    }
  }

}
