import { Component } from '@angular/core';
import { ReturnConfirmationComponent } from '../return-confirmation/return-confirmation.component';

@Component({
  selector: 'app-confirm-reset-password',
  templateUrl: '../return-confirmation/return-confirmation.component.html',
  styleUrls: ['../return-confirmation/return-confirmation.component.scss']
})
export class ConfirmResetPasswordComponent extends ReturnConfirmationComponent {
  public override titlePageSuccess = 'A password reset request has been sent to your e-mail';
  public override belowTheTitle = 'Check your e-mail';
  public override labelButton = 'PLAY NOW';
}
