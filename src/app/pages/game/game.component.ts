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
   *  Obtém o token de autenticação do serviço de token.
   * 2. Se não houver token, a função encerra a execução.
   * 3. Define o estado de carregamento como ativo para indicar que a revisão está sendo gerada.
   * 4. Utiliza o serviço de usuário para gerar uma nova revisão com base no token fornecido.
   * 5. Atualiza o estado da revisão com o texto truncado para exibição e o ID da revisão.
   * 6. Em caso de erro, desativa o estado de carregamento e retorna ao início do jogo.
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
      const { text, id } = response.data!;

      this.review = { title: text.slice(0, 30).concat('...'), text, id };
    } catch (error) {
      this.isLoading = false;

      this.returnToStartGame();
    }
  }

  /**
   * Envia uma resposta da review durante o jogo
   *
   * Essa função é responsável por realizar as seguintes ações:
   * 1. Obtém o token de autenticação do serviço de token.
   * 2. Verifica se o token está presente e se o comprimento da suposição é pelo menos 4 caracteres.
   *    - Se não houver token ou a suposição não atender aos requisitos, a função encerra a execução.
   * 3. Utiliza o serviço de usuário para enviar uma resposta para a revisão atual no jogo.
   * 4. Atualiza os dados do jogo, incluindo vidas e verifica se o jogo está ativo.
   * 5. Define a mensagem de resposta com base na correção da resposta fornecida.
   * 6. Se o jogo estiver ativo, salva os dados do jogo no serviço de token.
   *    - Caso contrário, define a mensagem de resposta como 'Game Over'.
   * 7. Em caso de erro, retorna ao início do jogo.
   *
   * @returns uma Promise quando a operação é concluída
   */
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

  /**
   * Realiza o upload de filmes associados a um título específico
   *
   * Essa função é responsável por realizar as seguintes ações:
   *
   * 1. Obtém o token de autenticação do serviço de token.
   * 2. Se não houver token, a função encerra a execução.
   * 3. Utiliza o serviço de usuário para enviar uma solicitação de upload de filmes com o título e o token.
   * 4. Atualiza as opções com os títulos de filmes retornados pela resposta.
   * 5. Em caso de erro, redefine as opções para um array vazio.
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
      this.options = response.data.map(value => value.title);
    } catch (error) {
      this.options = [];
    }
  }

  /**
   * Limpa os dados do jogo salvos, redireciona para a tela de início de jogo.
   *
   * Esaa função é responsável por realizar as seguintes ações:
   * 1. Chama o serviço de token para excluir os dados do jogo armazenados.
   * 2. Navega para a rota '/start-game', reiniciando o processo de início de jogo.
   */
  private returnToStartGame(): void {
    this.tokenService.deleteGameData();
    this.router.navigate(['/start-game']);
  }
}
