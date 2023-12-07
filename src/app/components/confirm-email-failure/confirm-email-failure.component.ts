import { Component } from '@angular/core';
import { ReturnConfirmationComponent } from '../return-confirmation/return-confirmation.component';

@Component({
  selector: 'app-confirm-email-failure',
  templateUrl: '../return-confirmation/return-confirmation.component.html',
  styleUrls: ['../return-confirmation/return-confirmation.component.scss']
})
export class ConfirmEmailFailureComponent extends ReturnConfirmationComponent {
  public override titlePageSuccess = 'It was not possible to confirm your account';
  public override belowTheTitle = 'Try again 30 minutes from the first attempt';
  public override labelButton = 'RETURN';
  public override imgURL = 'icon-error.svg';

  public override return(): void {
    this.router.navigate(['/sign-up']);
  }
}
