import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-forgot-password',
  templateUrl: './modal-forgot-password.component.html',
  styleUrls: ['./modal-forgot-password.component.scss']
})

export class ModalForgotPasswordComponent {
  emailPattern = /^[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  forgotPasswordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ModalForgotPasswordComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
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
   * @returns
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
}
