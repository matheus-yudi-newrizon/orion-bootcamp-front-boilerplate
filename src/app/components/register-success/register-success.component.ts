import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss']
})
export class RegisterSuccessComponent implements OnInit {
  public titlePageSuccess = '';
  public currentUrl = '';

  constructor(private router: Router) {}

  /* Capturando a URL na inicialização do componente e chamando a função para alterar o título */
  public ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.changeTitleComponent();
  }

  /**
   * Função responsável por mudar o título da página baseado na URL
   */
  public changeTitleComponent(): void {
    if (this.currentUrl === '/registration-success') {
      this.titlePageSuccess = 'Account created successfully';
    } else if (this.currentUrl === '/reset-password-success') {
      this.titlePageSuccess = 'Password reset successfully';
    }
  }

  /**
   * Retorna para a tela de cadastro em caso de erro.
   */
  public returnToHome(): void {
    if (this.currentUrl === '/registration-success' || this.currentUrl === '/reset-password-success') {
      this.router.navigate(['/start-game']);
    }
  }
}
