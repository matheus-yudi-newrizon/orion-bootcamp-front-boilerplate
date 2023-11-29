import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopUpGameComponent } from './pop-up-game.component';

describe('PopUpGameComponent', () => {
  let component: PopUpGameComponent;
  let fixture: ComponentFixture<PopUpGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpGameComponent]
    });
    fixture = TestBed.createComponent(PopUpGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
