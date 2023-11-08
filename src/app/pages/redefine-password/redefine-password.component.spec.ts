import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedefinePasswordComponent } from './redefine-password.component';

describe('RedefinePasswordComponent', () => {
  let component: RedefinePasswordComponent;
  let fixture: ComponentFixture<RedefinePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedefinePasswordComponent]
    });
    fixture = TestBed.createComponent(RedefinePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
