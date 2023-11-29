import { Component } from '@angular/core';
import { PopUpCorrectComponent } from '../pop-up-correct/pop-up-correct.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

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
  public override seeMoreMovie(): void {}

  /** Função para navegar para a próxima tela de jogo */
  public override nextMovie(): void {
    this.router.navigate(['/game']);
  }
}
