import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/pages/register-page/register-page.component';

@Component({
  selector: 'app-modal-forgot-password',
  templateUrl: './modal-forgot-password.component.html',
  styleUrls: ['./modal-forgot-password.component.scss']
})

export class ModalForgotPasswordComponent {

  constructor(public dialogRef: MatDialogRef<ModalForgotPasswordComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
