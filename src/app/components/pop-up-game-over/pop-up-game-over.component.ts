import { Component } from '@angular/core';
import { PopUpGameComponent } from '../pop-up-game/pop-up-game.component';

@Component({
  selector: 'app-pop-up-game-over',
  templateUrl: '../pop-up-game/pop-up-game.component.html',
  styleUrls: ['../pop-up-game/pop-up-game.component.scss', './pop-up-game-over.component.scss']
})
export class PopUpGameOverComponent extends PopUpGameComponent {
  public override title = 'Game Over!!';
  public override buttonLabel = 'RESTART';
}
