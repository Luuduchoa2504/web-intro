import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SendMailService} from "./services/send-mail.service";
import {CustomToastService} from "../../shared/utils/custom-toast.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
// import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sign-up-newsletter',
  templateUrl: './sign-up-newsletter.component.html',
  styleUrls: ['./sign-up-newsletter.component.scss']
})
export class SignUpNewsletterComponent implements OnInit {
  submitForm: FormGroup = this.fb.group({
    email: [null,[Validators.required, Validators.email]],
  });

  constructor(
    private fb: FormBuilder,
    private sendMailService: SendMailService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  send() {
    this.submitForm.valid ? this.toastr.success('thành công', 'Gửi thành công')
      : (this.submitForm.value.email ? this.toastr.error('Lỗi','Sai định dạng email')
        : this.toastr.warning('Cảnh báo','Vui lòng nhập email'));
    if (this.submitForm.valid) {
      const email = this.submitForm.get('email')?.value;
      this.sendMailService.send({email}).subscribe((res) => {
        if (res) {
          this.submitForm.reset();
          this.router.navigate(['/']);
        }
      });
    }
  }
}
