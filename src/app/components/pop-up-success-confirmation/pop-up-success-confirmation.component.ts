import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopUpGameComponent } from '../pop-up-game/pop-up-game.component';

@Component({
  selector: 'app-pop-up-success-confirmation',
  templateUrl: '../pop-up-game/pop-up-game.component.html',
  styleUrls: ['../pop-up-game/pop-up-game.component.scss']
})
export class PopUpSuccessConfirmationComponent extends PopUpGameComponent {
  public override title = 'Congratulations you got it!';
  public override buttonLabel = 'Next movie';
  public override imageUrl!: string;
  public override movieName!: string;

  constructor(
    public override dialogRef: MatDialogRef<void>,
    public router: Router
  ) {
    super(dialogRef);
  }

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
