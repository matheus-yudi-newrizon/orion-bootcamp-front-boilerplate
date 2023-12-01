import { Component } from '@angular/core';
import { PopUpGameComponent } from '../pop-up-game/pop-up-game.component';

@Component({
  selector: 'app-pop-up-success-confirmation',
  templateUrl: '../pop-up-game/pop-up-game.component.html',
  styleUrls: ['../pop-up-game/pop-up-game.component.scss']
})
export class PopUpSuccessConfirmationComponent extends PopUpGameComponent {
  public override title = 'Congratulations you got it!';
  public override buttonLabel = 'NEXT MOVIE';
  public override imageUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face';
  public override movieName!: string;

  /** Função para fechar o modal ao clique */
  public override closeModal(): void {
    this.dialogRef.close();
  }

  /** Função para ver mais informações sobre um filme */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public override seeMoreMovie(): void {}

  /** Função para navegar para a próxima tela de jogo */
  public override nextMovie(): void {
    this.router.navigate(['/game']);
  }
}
