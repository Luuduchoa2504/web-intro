import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SendMailService} from "./services/send-mail.service";
// import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sign-up-newsletter',
  templateUrl: './sign-up-newsletter.component.html',
  styleUrls: ['./sign-up-newsletter.component.scss']
})
export class SignUpNewsletterComponent implements OnInit {
  submitForm: FormGroup = this.fb.group({
    email: [null,[Validators.email]],
  });

  constructor(
    private fb: FormBuilder,
    private sendMailService: SendMailService,
    // private toastr: ToastrService
  ) {}

  ngOnInit() {
  }

  send() {
    // this.signupForm.valid ? this.toastr.success('Gửi thành công')
    //   : (this.signupForm.value.email ? this.toastr.error('Sai định dạng email')
    //     : this.toastr.warning('Vui lòng nhập email'));
    const email = this.submitForm.get('email')?.value;
    this.sendMailService.send({email}).subscribe();
  }
}
