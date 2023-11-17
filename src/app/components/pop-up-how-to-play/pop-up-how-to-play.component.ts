import { Component } from '@angular/core';
import { PopUpHowToPlayService } from 'src/app/services/pop-up-how-to-play/pop-up-how-to-play.service';

@Component({
  selector: 'app-pop-up-how-to-play',
  templateUrl: './pop-up-how-to-play.component.html',
  styleUrls: ['./pop-up-how-to-play.component.scss']
})
export class PopUpHowToPlayComponent {
  constructor(public myService: PopUpHowToPlayService) {}

  public mudarDeslocamento(): void {
    const novoDeslocamento = this.myService.deslocamento + 450; // Ajuste conforme necessário
    this.myService.alterarDeslocamento(novoDeslocamento);
  }

  public handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === 'Space') {
      this.mudarDeslocamento();
    }
  }
}
