import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent {
  constructor(public router: Router) {}

  /**
   * Função responsável por dar play no jogo, redirecionando para a página do game.
   */
  public startGame(): void {
    this.router.navigate(['/game']);
  }
}
