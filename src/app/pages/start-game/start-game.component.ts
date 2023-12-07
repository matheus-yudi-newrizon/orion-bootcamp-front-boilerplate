import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorResponse } from 'src/app/models/http/interface';
import { TokenService } from 'src/app/services/token/token.service';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent {
  public isLoading = false;
  public labelButton = 'START GAME';

  constructor(
    public router: Router,
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  public ngOnInit(): void {
    this.activeGame();
  }

  /**
   * Função responsável por dar play no jogo, redirecionando para a página do game.
   */
  public async startGame(): Promise<void> {
    try {
      this.isLoading = true;

      const token = this.tokenService.get();
      const game = this.tokenService.getGameData();

      if (token !== null && !game) {
        const data = { token: token };
        const response = await this.userService.startGame(data);
        this.tokenService.saveGameData(response.data!);
      }
      this.isLoading = true;
      this.router.navigate(['/game']);
    } catch (error) {
      this.isLoading = false;
      console.error('Error starting game:', (error as ErrorResponse).message);
    }
  }

  /**
   * Verifica se o usuário tem algum jogo ativo e altera a label do botão.
   */
  public activeGame(): void {
    if (this.tokenService.getGameData()?.isActive) {
      this.labelButton = 'CONTINUE';
    } else {
      this.labelButton = 'START GAME';
    }
  }
}
