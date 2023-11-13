import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTemplateComponent } from './email-template.component';

describe('EmailTemplateComponent', () => {
  let component: EmailTemplateComponent;
  let fixture: ComponentFixture<EmailTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailTemplateComponent]
    });
    fixture = TestBed.createComponent(EmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
