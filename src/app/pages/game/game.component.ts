import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';
import { LoginResponse, UserService } from 'src/app/services/user/user.service';

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
export class GameComponent implements OnInit {
  public review: Review = {
    id: '',
    text: '',
    title: ''
  };
  public gameData!: LoginResponse['data']['game'] | null;
  public replyMessage!: string;

  public guessTitle = new FormControl('');
  public options: string[] = [];
  public lives: boolean[] = [];
  public isLoading = false;

  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    public router: Router
  ) {}

  public ngOnInit(): void {
    this.gameData = this.tokenService.getGameData();
    this.fillLives(this.gameData?.lives || 2);

    this.generateReview();

    this.guessTitle.valueChanges.subscribe(value => {
      if ((value || '').length >= 4) {
        this.uploadMovies(value || '');
      }

      this.options = [];
    });
  }

  public fillLives(lives: number): void {
    this.lives = new Array(5).fill(false).map((_, index) => index < lives);
  }

  /**
   * Gera a review na tela do jogo para o usuário
   */
  public async generateReview(): Promise<void> {
    const token = this.tokenService.get();

    if (!token) {
      return;
    }

    try {
      this.isLoading = true;

      const response = await this.userService.generateReview({ token });
      const { text, id } = response.data!;

      this.review = { title: text.slice(0, 30).concat('...'), text, id };
    } catch (error) {
      this.isLoading = false;

      this.returnToStartGame();
    }
  }

  public async sendReply(): Promise<void> {
    const token = this.tokenService.get();

    if (!token || (this.guessTitle.value?.length || 0) < 4) {
      return;
    }

    try {
      const response = await this.userService.sendReply(
        {
          reviewId: this.review.id,
          answer: this.guessTitle.value || ''
        },
        token
      );

      const { game, isCorrect } = response.data!;
      this.gameData = game;
      this.fillLives(this.gameData.lives);

      if (this.gameData.isActive) {
        this.replyMessage = `Your answer is ${isCorrect ? 'correct' : 'wrong'}`;
        this.tokenService.saveGameData(this.gameData);
      } else {
        this.replyMessage = 'Game Over';
      }
    } catch (error) {
      this.returnToStartGame();
    }
  }

  public async uploadMovies(title: string): Promise<void> {
    const token = this.tokenService.get();

    if (!token) {
      return;
    }

    try {
      const response = await this.userService.uploadMovies({ title, token });
      this.options = response.data.map(value => value.title);
    } catch (error) {
      this.options = [];
    }
  }

  private returnToStartGame(): void {
    this.tokenService.deleteGameData();
    this.router.navigate(['/start-game']);
  }
}
