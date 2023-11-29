import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-correct',
  templateUrl: './pop-up-correct.component.html',
  styleUrls: ['./pop-up-correct.component.scss']
})
export class PopUpCorrectComponent {
  public title = 'Congratulations!';
  public buttonLabel = 'NEXT MOVIE';
  public imageUrl = '';
  public movieName = 'Movie name';

  constructor(public dialogRef: MatDialogRef<void>) {}

  /** Fecha o modal ao clicar no botão 'Close' */
  public closeModal(): void {}

  /* Redireciona o usuário para o site do TMDB */
  public seeMoreMovie(): void {}

  /** Leva o usuário a uma nova tentativa no jogo */
  public nextMovie(): void {}
}
