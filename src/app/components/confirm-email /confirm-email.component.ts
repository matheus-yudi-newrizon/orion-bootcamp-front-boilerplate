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
   * Função responsável por realizar a redefinição de senha com base nos dados fornecidos no formulário e token
   */
  private async confirmEmail(token: string, id: string): Promise<void> {
    try {
      this.isLoading = true;
      const value = await this.userService.confirmEmail({
        token,
        id: Number(id)
      });
      const { success } = value;
      this.isLoading = false;
      if (!success) {
        this.router.navigate(['/confirm-email-failure']);
      }
    } catch (error) {
      this.isLoading = false;
      this.router.navigate(['/confirm-email-failure']);
    }
  }
}
