import { Component } from '@angular/core';
import { ReturnConfirmationComponent } from '../return-confirmation/return-confirmation.component';

@Component({
  selector: 'app-reset-password-success',
  templateUrl: '../return-confirmation/return-confirmation.component.html',
  styleUrls: ['../return-confirmation/return-confirmation.component.scss']
})
export class ResetPasswordSuccessComponent extends ReturnConfirmationComponent {
  public override titlePageSuccess = 'Password reset successfully';
  public override belowTheTitle = 'You can now play the game again.';
  public override labelButton = 'PLAY NOW';
}
