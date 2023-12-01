import { Directive, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UploadMoviesResponse } from 'src/app/services/user/user.service';

export enum EnumPopUpActions {
  CLOSE,
  SEE_MORE,
  NEXT
}

@Directive()
export abstract class PopUpGameComponent {
  public title = 'Congratulations!';
  public buttonLabel = 'NEXT MOVIE';
  public imageUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face';
  public movieUrl = 'https://www.themoviedb.org/movie/';

  constructor(
    public dialogRef: MatDialogRef<void>,
    @Inject(MAT_DIALOG_DATA) public data: UploadMoviesResponse['data'][0],
    public router: Router
  ) {}

  /** Fecha o modal ao clicar no botão 'Close' */
  public close(): void {
    this.dialogRef.close(EnumPopUpActions.CLOSE);
  }

  /* Redireciona o usuário para o site do TMDB */
  public seeMoreMovie(): void {
    window.open(this.movieUrl + this.data.id);
  }

  /** Leva o usuário a uma nova tentativa no jogo */
  public next(): void {
    this.dialogRef.close(EnumPopUpActions.NEXT);
  }
}
