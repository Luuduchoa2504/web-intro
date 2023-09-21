import { Component, ElementRef } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { EmailContactService } from './services/email-contact.service';
import { CustomToastService } from 'src/app/shared/utils/custom-toast.service';

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
    email: [null, [Validators.required, Validators.email]],
    phone: [null,  [Validators.required, this.phoneValidator()]],
    content: [null, [Validators.required]],
  });

  constructor(private fb: FormBuilder, private _toast: CustomToastService, private emailContactService: EmailContactService) {}

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
    const sendMailForm = {
      name: this.loginForm.get('username')?.value,
      phone: this.loginForm.get('phone')?.value,
      email: this.loginForm.get('email')?.value,
      content: this.loginForm.get('content')?.value,
    }
    if (this.loginForm.invalid) {
      return;
    }
    this.emailContactService.send(sendMailForm).subscribe((val) => {
      this.loginForm.reset();
      this._toast.showSuccess('Thành công', 'Gửi email phản hồi thành công');
    }, (err) => {      
      this._toast.showError('Thành công', `${err.error.message}`);
    });
  }
  
}
