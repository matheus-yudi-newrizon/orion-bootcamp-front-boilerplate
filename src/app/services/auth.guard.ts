import { Router } from '@angular/router';
import { TokenService } from './token/token.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard {
  constructor(
    private router: Router,
    private tokenService: TokenService
  ) {}

  /**
   * canActivate
   *
   * Define se a rota poderá ser acessada.
   *
   * @returns True caso possa acessar, false caso não possa acessar
   */
  public canActivate(): boolean | Promise<boolean> {
    if (this.tokenService.get()) {
      return true;
    }

    return this.router.navigate(['/access-denied'], { replaceUrl: true });
  }
}
