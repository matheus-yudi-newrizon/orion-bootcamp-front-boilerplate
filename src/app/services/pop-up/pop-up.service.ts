// popup.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  isPopUpVisible = false;

  togglePopUp() {
    this.isPopUpVisible = !this.isPopUpVisible;
  }
}
