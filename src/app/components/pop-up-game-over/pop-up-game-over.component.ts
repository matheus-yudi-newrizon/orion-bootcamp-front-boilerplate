import { Component } from '@angular/core';
import { PopUpGameComponent } from '../pop-up-game/pop-up-game.component';

@Component({
  selector: 'app-pop-up-success-confirmation',
  templateUrl: '../pop-up-game/pop-up-game.component.html',
  styleUrls: ['../pop-up-game/pop-up-game.component.scss', './pop-up-game-over.component.scss']
})
export class PopUpGameOverComponent extends PopUpGameComponent {}
