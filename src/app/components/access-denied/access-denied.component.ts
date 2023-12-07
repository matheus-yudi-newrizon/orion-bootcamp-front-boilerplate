import { Component } from '@angular/core';
import { ReturnConfirmationComponent } from '../return-confirmation/return-confirmation.component';

@Component({
  selector: 'app-access-denied',
  templateUrl: '../return-confirmation/return-confirmation.component.html',
  styleUrls: ['../return-confirmation/return-confirmation.component.scss']
})
export class AccessDeniedComponent extends ReturnConfirmationComponent {
  public override titlePageSuccess = "It looks like you haven't logged in yet";
  public override belowTheTitle = 'Please return to the home page and log in for guess new movies.';
  public override labelButton = 'LOGIN NOW';
  public override imgURL = 'icon-error.svg';

  public override return(): void {
    this.router.navigate(['/login']);
  }
}
