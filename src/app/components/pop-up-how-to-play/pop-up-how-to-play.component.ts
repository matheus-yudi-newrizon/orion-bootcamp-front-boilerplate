import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-how-to-play',
  templateUrl: './pop-up-how-to-play.component.html',
  styleUrls: ['./pop-up-how-to-play.component.scss']
})
export class PopUpHowToPlayComponent {
  constructor(public dialogRef: MatDialogRef<PopUpHowToPlayComponent>) {}

  /**
   * Função responsável por fechar o modal quando o botão "cancel" for acionado.
   */
  public closeModal(): void {
    this.dialogRef.close();
  }
}
