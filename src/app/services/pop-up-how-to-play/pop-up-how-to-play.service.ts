import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpHowToPlayService {
  public deslocamento = 0;

  public alterarDeslocamento(novoDeslocamento: number): void {
    this.deslocamento = novoDeslocamento;
  }
}
