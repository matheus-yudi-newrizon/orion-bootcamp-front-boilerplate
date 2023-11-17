import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpHowToPlayComponent } from './pop-up-how-to-play.component';

describe('PopUpHowToPlayComponent', () => {
  let component: PopUpHowToPlayComponent;
  let fixture: ComponentFixture<PopUpHowToPlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpHowToPlayComponent]
    });
    fixture = TestBed.createComponent(PopUpHowToPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
