import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-contact',
  templateUrl: './email-contact.component.html',
  styleUrls: ['./email-contact.component.scss']
})
export class EmailContactComponent {
  username?: ElementRef;
  authenticationError = false;
  passwordVisible = false;
  loginForm = this.fb.group({
    username: [null, [Validators.required]],
    email: [null, [Validators.required]],
    phone: [null, [Validators.required]],
    content: [null, [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  submitForm() {}
  
}
