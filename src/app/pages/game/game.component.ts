import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EnumPopUpActions } from 'src/app/components/pop-up-game/pop-up-game.component';
import { PopUpSuccessConfirmationComponent } from 'src/app/components/pop-up-success-confirmation/pop-up-success-confirmation.component';
import { PopUpUnsuccessConfirmationComponent } from 'src/app/components/pop-up-unsuccess-confirmation/pop-up-unsuccess-confirmation.component';
import { TokenService } from 'src/app/services/token/token.service';
import { LoginResponse, UploadMoviesResponse, UserService } from 'src/app/services/user/user.service';
import * as showdown from 'showdown';

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
  public guessTitle = new FormControl('');
  public selectedMovie: UploadMoviesResponse['data'][0] | null = null;
  public options: UploadMoviesResponse['data'] = [];
  public lives: boolean[] = [];
  public isLoading = false;

  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    public router: Router,
    public dialog: MatDialog
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

  /**
   * Preenche o array de vidas com base no número de vidas fornecido
   *
   * @param lives o número de vidas ativas do jogador
   */
  public fillLives(lives: number): void {
    this.lives = new Array(5).fill(false).map((_, index) => index < lives);
  }

  /**
   * Gera uma nova revisão para o jogo
   *
   * @returns uma Promise quando a operação é concluída
   */
  public async generateReview(): Promise<void> {
    const token = this.tokenService.get();

    if (!token) {
      return;
    }

    try {
      this.isLoading = true;

      const response = await this.userService.generateReview({ token });
      const { text, id, author } = response.data!;
      const converter = new showdown.Converter();

      this.review = {
        title: author,
        text: converter.makeHtml(text || ''),
        id
      };
    } catch (error) {
      this.isLoading = false;

      this.returnToStartGame();
    }
  }

  /**
   * Envia uma resposta da review durante o jogo
   *
   * @returns uma Promise quando a operação é concluída
   */
  public async sendReply(): Promise<void> {
    const token = this.tokenService.get();

    if (!token || typeof this.guessTitle.value === 'string') {
      return;
    }

    try {
      const response = await this.userService.sendReply(
        {
          reviewId: this.review.id,
          answer: this.selectedMovie?.id !== undefined ? this.selectedMovie.id : 0
        },
        token
      );

      const { game, isCorrect } = response.data!;
      this.gameData = game;
      this.fillLives(this.gameData.lives);

      if (this.gameData.isActive) {
        this.tokenService.saveGameData(this.gameData);

        if (isCorrect) {
          this.openPopUpSuccess(this.selectedMovie!);
        } else {
          this.openPopUpError(this.selectedMovie!);
        }
      } else {
        this.openPopUpGameOver(this.selectedMovie!);
      }
    } catch (error) {
      this.returnToStartGame();
    }
  }

  /**
   * Realiza o upload de filmes associados a um título específico
   *
   * @param title o título associado aos filmes a serem enviados
   * @returns uma Promise quando a operação é concluída
   */
  public async uploadMovies(title: string): Promise<void> {
    const token = this.tokenService.get();

    if (!token) {
      return;
    }

    try {
      const response = await this.userService.uploadMovies({ title, token });
      this.options = response.data;
    } catch (error) {
      this.options = [];
    }
  }

  /**
   * Limpa os dados do jogo salvos, redireciona para a tela de início de jogo.
   */
  private returnToStartGame(): void {
    this.tokenService.deleteGameData();
    this.router.navigate(['/start-game']);
  }

  /**
   * Abre o pop-up de sucesso no caso do usuário ter acertado a review
   * @param movie As informações do filme que serão exibidas na janela de pop-up
   */
  public openPopUpSuccess(movie: UploadMoviesResponse['data'][0]): void {
    const dialogRef = this.dialog.open(PopUpSuccessConfirmationComponent, {
      data: movie
    });
    dialogRef.afterClosed().subscribe((result: EnumPopUpActions) => {
      if (result === EnumPopUpActions.CLOSE || result === EnumPopUpActions.NEXT) {
        this.generateReview();
      }
    });
  }

  /**
   * Abre o pop-up de erro no caso do usuário ter errado a review
   * @param movie  As informações do filme que serão exibidas na janela de pop-up
   */
  public openPopUpError(movie: UploadMoviesResponse['data'][0]): void {
    const dialogRef = this.dialog.open(PopUpUnsuccessConfirmationComponent, {
      data: movie
    });
    dialogRef.afterClosed().subscribe((result: EnumPopUpActions) => {
      if (result === EnumPopUpActions.CLOSE || result === EnumPopUpActions.NEXT) {
        this.generateReview();
      }
    });
  }

  /**
   * Abre o pop-up de game over no caso do usuário ter perdido todas as vidas
   * @param movie  As informações do filme que serão exibidas na janela de pop-up
   */
  public openPopUpGameOver(movie: UploadMoviesResponse['data'][0]): void {
    // TODO trocar pelo game over
    const dialogRef = this.dialog.open(PopUpSuccessConfirmationComponent, {
      data: movie
    });
    dialogRef.afterClosed().subscribe((result: EnumPopUpActions) => {
      if (result === EnumPopUpActions.CLOSE || result === EnumPopUpActions.NEXT) {
        this.router.navigate(['/start-game']);
      }
    });
  }

  /**
   * Retorna uma string contendo o título do filme
   * @param movie objeto de filme contendo informações como título
   * @returns string contendo o título ou string vazia, no caso do título estar indisponível
   */
  public displayWith(movie: UploadMoviesResponse['data'][0]): string {
    return movie.title || '';
  }

  /**
   * Atualiza o filme selecionado com base na opção escolhida
   * @param event a seleção com a opção escolhida
   */
  public onMovieSelected(event: MatAutocompleteSelectedEvent): void {
    this.selectedMovie = event.option.value as UploadMoviesResponse['data'][0];
  }
}
