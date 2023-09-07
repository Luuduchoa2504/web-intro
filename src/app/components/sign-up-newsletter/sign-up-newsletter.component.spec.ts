import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpNewsletterComponent } from './sign-up-newsletter.component';

describe('SignUpNewsletterComponent', () => {
  let component: SignUpNewsletterComponent;
  let fixture: ComponentFixture<SignUpNewsletterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpNewsletterComponent]
    });
    fixture = TestBed.createComponent(SignUpNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
