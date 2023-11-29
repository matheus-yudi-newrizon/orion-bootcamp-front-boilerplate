import { Component } from '@angular/core';
import { PopUpCorrectComponent } from '../pop-up-correct/pop-up-correct.component';

@Component({
  selector: 'app-pop-up-success-confirmation',
  templateUrl: '../pop-up-correct/pop-up-correct.component.html',
  styleUrls: ['../pop-up-correct/pop-up-correct.component.scss']
})
export class PopUpSuccessConfirmationComponent extends PopUpCorrectComponent {
  public override title = 'Congratulations you got it!';
  public override buttonLabel = 'Next movie';
  public override imageUrl!: string;
  public override movieName!: string;
}
