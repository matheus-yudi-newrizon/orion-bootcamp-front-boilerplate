import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-failed',
  templateUrl: './register-failed.component.html',
  styleUrls: ['./register-failed.component.scss']
})
export class RegisterFailedComponent implements OnInit {
  public titlePageFailed = '';
  public textPageFailed = '';
  public textButtonFailed = '';
  public currentUrl = '';

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.changeWordsComponent();
  }

  /**
   * Retorna para a tela de cadastro em caso de erro.
   */
  public returnToHome(): void {
    if (this.currentUrl === '/registration-failure') {
      this.router.navigate(['/sign-up']);
    } else if (this.currentUrl === '/reset-password-failure') {
      this.router.navigate(['/login']);
    }
  }

  /**
   * Função responsável por mudar o título e textos da página baseado na URL
   */
  public changeWordsComponent(): void {
    if (this.currentUrl === '/registration-failure') {
      this.titlePageFailed = 'It was not possible to create your account';
      this.textPageFailed = 'Please return to the home page and try again.';
      this.textButtonFailed = 'RETURN';
    } else if (this.currentUrl === '/reset-password-failure') {
      this.titlePageFailed = 'It was not possible to recover the password';
      this.textPageFailed = 'Please return to the home page and request again.';
      this.textButtonFailed = 'RETURN TO HOME';
    }
  }
}
