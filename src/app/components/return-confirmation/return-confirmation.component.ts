import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-confirmation',
  templateUrl: './return-confirmation.component.html',
  styleUrls: ['./return-confirmation.component.scss']
})
export class ReturnConfirmationComponent {
  public titlePageSuccess = '';
  public belowTheTitle = '';
  public labelButton = '';
  public imgURL = 'icon-check.svg';

  constructor(public router: Router) {}

  /** Retorna para a página de login */
  public return(): void {
    this.router.navigate(['/login']);
  }
}
