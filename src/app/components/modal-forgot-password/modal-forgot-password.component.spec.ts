import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalForgotPasswordComponent } from './modal-forgot-password.component';

describe('ModalForgotPasswordComponent', () => {
  let component: ModalForgotPasswordComponent;
  let fixture: ComponentFixture<ModalForgotPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalForgotPasswordComponent]
    });
    fixture = TestBed.createComponent(ModalForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
