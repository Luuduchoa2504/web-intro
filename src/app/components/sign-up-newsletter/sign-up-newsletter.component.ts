import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sign-up-newsletter',
  templateUrl: './sign-up-newsletter.component.html',
  styleUrls: ['./sign-up-newsletter.component.scss']
})
export class SignUpNewsletterComponent implements OnInit {
  signupForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
  });

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
  }

  send() {
    // this.signupForm.valid ? this.toastr.success('Gửi thành công')
    //   : (this.signupForm.value.email ? this.toastr.error('Sai định dạng email')
    //     : this.toastr.warning('Vui lòng nhập email'));
  }
}
