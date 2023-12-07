import { Component } from '@angular/core';
import { ReturnConfirmationComponent } from '../return-confirmation/return-confirmation.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: '../return-confirmation/return-confirmation.component.html',
  styleUrls: ['../return-confirmation/return-confirmation.component.scss']
})
export class ConfirmEmailComponent extends ReturnConfirmationComponent {
  public override titlePageSuccess = 'Account confirmed successfully';
  public override belowTheTitle = 'You can now play the game.';
  public override labelButton = 'PLAY NOW';

  constructor(
    private userService: UserService,
    public override router: Router,
    private route: ActivatedRoute
  ) {
    super(router);
  }

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      const id = params['id'];

      this.confirmEmail(token, id);
    });
  }

  /**
   * Método assíncrono para confirmar o e-mail de um usuário.
   * @param token - O token associado à solicitação de confirmação de e-mail.
   * @param id - O ID do usuário para o qual a confirmação de e-mail está relacionada.
   * @returns Promise<void>
   */
  private async confirmEmail(token: string, id: string): Promise<void> {
    try {
      // Define o estado de carregamento como verdadeiro, indicando que o processo de confirmação está em andamento.
      this.isLoading = true;

      // Chama o userService para confirmar o e-mail com o token e o ID do usuário fornecidos.
      const value = await this.userService.confirmEmail({
        token,
        id: Number(id)
      });

      // Desestrutura a resposta para obter a propriedade 'success'.
      const { success } = value;

      // Define o estado de carregamento como falso, indicando que o processo de confirmação está concluído.
      this.isLoading = false;

      // Se a confirmação do e-mail não for bem-sucedida, navega até a rota de falha.
      if (!success) {
        this.router.navigate(['/confirm-email-failure']);
      }
    } catch (error) {
      // Em caso de erro durante o processo de confirmação, define o estado de carregamento como falso e navega até a rota de falha.
      this.isLoading = false;
      this.router.navigate(['/confirm-email-failure']);
    }
  }
}
