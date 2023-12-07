import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopUpHowToPlayComponent } from '../../pop-up-how-to-play/pop-up-how-to-play.component';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private currentRoute = '';

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private tokenService: TokenService
  ) {}

  public ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  /**
   * Verifica se a página atual é a página de login.
   * @returns True se a página atual é a página de login, caso contrário, False.
   */
  public isLoginPage(): boolean {
    return this.currentRoute === '/login';
  }

  /**
   * Verifica se pode mostrar o ícone de logout.
   * @returns True se puder mostrar, caso contrário, False.
   */
  public canShowLogoutIcon(): boolean {
    return [
      '/sign-up',
      '/auth/reset-password',
      '/registration-success',
      '/registration-failure',
      '/reset-password-success',
      '/reset-password-failure',
      '/confirm-reset-password',
      '/access-denied',
      '/auth/confirm-email',
      '/auth/confirm-email-failure'
    ].includes(this.currentRoute);
  }

  /**
   * Função responsável por ocultar/exibir itens e aplicar classes no caso da página ser start-game.
   * @returns
   */
  public isStartGamePage(): boolean {
    return this.currentRoute === '/start-game';
  }

  /**
   * Função responsável por ocultar/exibir itens e aplicar classes no caso da página ser game.
   * @returns
   */
  public isGamePage(): boolean {
    return this.currentRoute === '/game';
  }

  /**
   * Função responsável por ocultar/exibir itens e aplicar classes no caso da página ser sign-up.
   * @returns
   */
  public isSignUpPage(): boolean {
    return this.currentRoute === '/sign-up';
  }

  /**
   * Função responsável pelo modal de howToPlay
   */
  public openModalHowToPlay(): void {
    const dialogRef = this.dialog.open(PopUpHowToPlayComponent, {
      width: '404px',
      height: '100%',
      panelClass: 'custom__modal',
      disableClose: false,
      position: {
        right: '0'
      },
      exitAnimationDuration: 6000,
      enterAnimationDuration: -6000
    });

    dialogRef.beforeClosed().subscribe(() => {
      dialogRef.addPanelClass('modal__closed');
    });
  }

  /**
   * Função responsável por fazer o logout, deletar o token e redirecionar o usuário para a página de login
   */
  public logout(): void {
    this.tokenService.logout();
  }

  /**
   * Função responsável por detectar a rota atual e dependendo da rota detectada navegar para a rota correspondente
   */
  public onLogoClick(): void {
    if (this.currentRoute === '/game') {
      this.router.navigate(['/start-game']);
      return;
    }
    if (this.currentRoute === '/sign-up') {
      this.router.navigate(['/login']);
    }
  }
}
