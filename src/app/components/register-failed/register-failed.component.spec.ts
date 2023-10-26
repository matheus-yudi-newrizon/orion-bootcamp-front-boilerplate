import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFailedComponent } from './register-failed.component';

describe('RegisterFailedComponent', () => {
  let component: RegisterFailedComponent;
  let fixture: ComponentFixture<RegisterFailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterFailedComponent]
    });
    fixture = TestBed.createComponent(RegisterFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
