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

  /**
   * Manipula o evento de pressionar uma tecla do teclado.
   * Fecha o modal se a tecla pressionada for a tecla "Enter".
   *
   * @param event - O evento de teclado a ser manipulado.
   */
  public handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.closeModal();
    }
  }
}
