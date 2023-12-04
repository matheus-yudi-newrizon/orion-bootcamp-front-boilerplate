import { Component } from '@angular/core';
import { PopUpGameComponent } from '../pop-up-game/pop-up-game.component';

@Component({
  selector: 'app-pop-up-unsuccess-confirmation',
  templateUrl: '../pop-up-game/pop-up-game.component.html',
  styleUrls: ['../pop-up-game/pop-up-game.component.scss', './pop-up-unsuccess-confirmation.component.scss']
})
export class PopUpUnsuccessConfirmationComponent extends PopUpGameComponent {
  public override title = 'Unfortunately you lost';
  public override buttonLabel = 'NEXT MOVIE';
}
