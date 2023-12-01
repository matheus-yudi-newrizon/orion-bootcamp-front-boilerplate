import { Component } from '@angular/core';
import { PopUpGameComponent } from '../pop-up-game/pop-up-game.component';

@Component({
  selector: 'app-pop-up-success-confirmation',
  templateUrl: '../pop-up-game/pop-up-game.component.html',
  styleUrls: ['../pop-up-game/pop-up-game.component.scss', './pop-up-success-confirmation.component.scss']
})
export class PopUpSuccessConfirmationComponent extends PopUpGameComponent {
  public override title = 'Congratulations you got it!';
  public override buttonLabel = 'NEXT MOVIE';
}
