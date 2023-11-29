import { Component } from '@angular/core';

@Component({
  selector: 'app-pop-up-correct',
  templateUrl: './pop-up-correct.component.html',
  styleUrls: ['./pop-up-correct.component.scss']
})
export class PopUpCorrectComponent {
  public title = 'Congratulations!';
  public buttonLabel = 'NEXT MOVIE';
  public movieName = 'Movie name';
}
