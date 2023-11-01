import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-failed',
  templateUrl: './register-failed.component.html',
  styleUrls: ['./register-failed.component.scss']
})
export class RegisterFailedComponent {

  constructor(private router: Router) { }

  /**
   * Retorna para a tela de cadastro em caso de erro.
   */
  public returnToHome(): void {
    this.router.navigate(['/home']);
  }
}
