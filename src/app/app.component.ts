import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'review-reveal-web';

  constructor(private tokenService: TokenService) {}

  public ngOnInit(): void {
    const rememberMe = this.tokenService.getRememberMe();
    this.tokenService.setStorage(rememberMe ? 'localStorage' : 'sessionStorage');
  }
}
