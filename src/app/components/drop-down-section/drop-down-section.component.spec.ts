import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownSectionComponent } from './drop-down-section.component';

describe('DropDownSectionComponent', () => {
  let component: DropDownSectionComponent;
  let fixture: ComponentFixture<DropDownSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropDownSectionComponent]
    });
    fixture = TestBed.createComponent(DropDownSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
