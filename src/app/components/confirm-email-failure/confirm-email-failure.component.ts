import { Component } from '@angular/core';
import { ReturnConfirmationComponent } from '../return-confirmation/return-confirmation.component';

@Component({
  selector: 'app-confirm-email-failure',
  templateUrl: '../return-confirmation/return-confirmation.component.html',
  styleUrls: ['../return-confirmation/return-confirmation.component.scss']
})
export class ConfirmEmailFailureComponent extends ReturnConfirmationComponent {
  public override titlePageSuccess = 'It was not possible to confirm your account';
  public override belowTheTitle = 'Please return to the home page and try again';
  public override labelButton = 'RETURN';
  public override imgURL = 'icon-error.svg';
}
