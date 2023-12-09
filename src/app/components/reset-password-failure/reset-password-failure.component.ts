import { Component } from '@angular/core';
import { ReturnConfirmationComponent } from '../return-confirmation/return-confirmation.component';

@Component({
  selector: 'app-reset-password-failure',
  templateUrl: '../return-confirmation/return-confirmation.component.html',
  styleUrls: ['../return-confirmation/return-confirmation.component.scss']
})
export class ResetPasswordFailureComponent extends ReturnConfirmationComponent {
  public override titlePageSuccess = 'It was not possible to recover the password';
  public override belowTheTitle = 'Please return to the home page and request again.';
  public override labelButton = 'RETURN';
  public override imgURL = 'icon-error.svg';
}
