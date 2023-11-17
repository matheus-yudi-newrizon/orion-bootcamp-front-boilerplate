// popup.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  public isPopUpVisible = false;

  public togglePopUp(): void {
    this.isPopUpVisible = !this.isPopUpVisible;
  }
}
