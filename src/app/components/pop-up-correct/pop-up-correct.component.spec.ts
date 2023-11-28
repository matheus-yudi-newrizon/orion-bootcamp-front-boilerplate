import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCorrectComponent } from './pop-up-correct.component';

describe('PopUpCorrectComponent', () => {
  let component: PopUpCorrectComponent;
  let fixture: ComponentFixture<PopUpCorrectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpCorrectComponent]
    });
    fixture = TestBed.createComponent(PopUpCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
