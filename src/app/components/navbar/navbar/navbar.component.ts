import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopUpHowToPlayService } from 'src/app/services/pop-up-how-to-play/pop-up-how-to-play.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private currentRoute = '';

  constructor(private router: Router, public myService: PopUpHowToPlayService) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

  /**
 * Verifica se a página atual é a página de login.
 * @returns True se a página atual é a página de login, caso contrário, False.
 */
  isLoginPage() {
    return this.currentRoute === '/login';
  }
  /**
  * Verifica se a página atual é a página de cadastro.
  * @returns True se a página atual é a página de cadastro, caso contrário, False.
  */
  isSignUpPage() {
    return this.currentRoute === '/sign-up' || '/password-reset';
  }

  moverParaEsquerda(): void {
    const novoDeslocamento = this.myService.deslocamento - 450; // Ajuste conforme necessário
    this.myService.alterarDeslocamento(novoDeslocamento);
  }
}
