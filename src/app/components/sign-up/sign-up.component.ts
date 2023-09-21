import { Component, ElementRef } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { LoginService } from "../sign-in/login.service";
import {CustomToastService} from "../../shared/utils/custom-toast.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  username?: ElementRef;
  errEmailText: string | null = '';
  authenticationError = false;
  passwordVisible = false;

  signupForm = this.fb.group({
    username: [null, [Validators.required]],
    email: [null,[Validators.email]],
    phone: [null, [Validators.required, this.phoneValidator()]],
    password: [null, [Validators.required]],
    confirmPassword: [null, [Validators.required]],
  }, { validators: this.passwordMatchValidator });
  errPassWord: string | null = '';
  errConfirmPass: string | null = '';

  constructor(
    private fb: FormBuilder,
    private accountService: LoginService,
    private _toast: CustomToastService,
  ) {}

  passwordMatchValidator(form: FormGroup): null | { passwordMismatch: boolean } {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true }; // Return an error object
    } else {
      return null; // Return null when passwords match
    }
  }

  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const phoneValue = control.value;

      // Use a regular expression to check for 10 digits
      const valid = /^\d{10}$/.test(phoneValue);

      if (!valid) {
        return { invalidPhone: true };
      }

      return null;
    };
  }

  submitForm() {
    const singupForm = {
      name: this.signupForm.get('username')?.value,
      phone: this.signupForm.get('phone')?.value,
      email: this.signupForm.get('email')?.value,
      password: this.signupForm.get('password')?.value,
    }
    if (this.signupForm.invalid) {
      return;
    }
    this.accountService.register(singupForm).subscribe((val) => {
      this.signupForm.reset();
      this._toast.showSuccess('Thành công', 'Tạo tài khoản thành công');
    }, (err) => {      
      this._toast.showError('Lỗi', `${err.error.msg}`)
    });
  }

}
