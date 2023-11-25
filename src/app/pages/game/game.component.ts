import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';
import { LoginResponse, UserService, SendReplyResponse } from 'src/app/services/user/user.service';

interface Review {
  id: string;
  title: string;
  text: string;
}
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  public review!: Review;
  public gameData!: LoginResponse['data']['game'] | null;
  public replyData!: SendReplyResponse['data'] | null;

  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    public router: Router
  ) {}

  public ngOnInit(): void {
    this.generateReview();
  }

  /**
   * Gera a review na tela do jogo para o usuário
   */
  public async generateReview(): Promise<void> {
    const token = this.tokenService.get();
    this.gameData = this.tokenService.getGameData();

    try {
      if (token !== null) {
        const response = await this.userService.generateReview({ token });
        const { text, id } = response.data!;
        this.review = { title: text.slice(0, 30).concat('...'), text, id };
      }
    } catch (error) {
      this.tokenService.deleteGameData();
      this.router.navigate(['/start-game']);
    }
  }

  public async sendReply(answer: string): Promise<void> {
    const token = this.tokenService.get();
    if (!token) {
      return;
    }

    try {
      const response = await this.userService.sendReply(
        {
          reviewId: this.review.id,
          answer
        },
        token
      );

      this.replyData = response.data;
      this.tokenService.saveGameData(this.replyData!.game);
    } catch (error) {
      this.tokenService.deleteGameData();
      this.router.navigate(['/start-game']);
    }
  }
}
