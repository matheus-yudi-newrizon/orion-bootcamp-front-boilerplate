import { Directive, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UploadMoviesResponse } from 'src/app/services/user/user.service';

@Directive()
export abstract class PopUpGameComponent {
  public title = 'Congratulations!';
  public buttonLabel = 'NEXT MOVIE';
  public imageUrl = '';
  public movieName = 'Movie name';

  constructor(
    public dialogRef: MatDialogRef<void>,
    @Inject(MAT_DIALOG_DATA) public data: UploadMoviesResponse['data'][0],
    public router: Router
  ) {}

  /** Fecha o modal ao clicar no botão 'Close' */
  public abstract closeModal(): void;

  /* Redireciona o usuário para o site do TMDB */
  public abstract seeMoreMovie(): void;

  /** Leva o usuário a uma nova tentativa no jogo */
  public abstract nextMovie(): void;
}
