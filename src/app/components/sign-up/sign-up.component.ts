import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  username?: ElementRef;
  authenticationError = false;
  passwordVisible = false;
  loginForm = this.fb.group({
    username: [null, [Validators.required]],
    email: [null, [Validators.required]],
    phone: [null, [Validators.required]],
    password: [null, [Validators.required]],
    passwordCheck: [null, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
  ) {}

  submitForm() {
    
  }

}
