import { Component } from '@angular/core';
import { ReturnConfirmationComponent } from '../return-confirmation/return-confirmation.component';

@Component({
  selector: 'app-register-success',
  templateUrl: '../return-confirmation/return-confirmation.component.html',
  styleUrls: ['../return-confirmation/return-confirmation.component.scss']
})
export class RegisterSuccessComponent extends ReturnConfirmationComponent {
  public override titlePageSuccess = 'Account created successfully';
  public override belowTheTitle = 'You can now play the game.';
  public override labelButton = 'PLAY NOW';
}
