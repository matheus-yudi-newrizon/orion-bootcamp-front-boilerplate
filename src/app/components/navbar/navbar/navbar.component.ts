import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopUpHowToPlayComponent } from '../../pop-up-how-to-play/pop-up-how-to-play.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private currentRoute = '';

  constructor(
    private router: Router,
    public dialog: MatDialog
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
   * Verifica se a página atual é a página de cadastro.
   * @returns True se a página atual é a página de cadastro, caso contrário, False.
   */
  public isSignUpPage(): boolean {
    return [
      '/sign-up',
      '/reset-password',
      '/registration-success',
      '/registration-failure',
      '/reset-password-success',
      '/reset-password-failure'
    ].includes(this.currentRoute);
  }

  /**
   * Função responsável por abrir o modal de forgotPassword
   */
  public openModalHowToPlay(): void {
    const dialogRef = this.dialog.open(PopUpHowToPlayComponent, {
      width: '500px',
      height: '100%',
      panelClass: 'custom__modal',
      disableClose: false,
      position: {
        right: '0'
      },
      exitAnimationDuration: 6000
    });

    dialogRef.beforeClosed().subscribe(() => {
      dialogRef.addPanelClass('modal__closed');
    });
  }
}
