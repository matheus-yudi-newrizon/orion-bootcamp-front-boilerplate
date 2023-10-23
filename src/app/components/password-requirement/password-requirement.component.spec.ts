import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRequirementComponent } from './password-requirement.component';

describe('PasswordRequirementComponent', () => {
  let component: PasswordRequirementComponent;
  let fixture: ComponentFixture<PasswordRequirementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordRequirementComponent]
    });
    fixture = TestBed.createComponent(PasswordRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
