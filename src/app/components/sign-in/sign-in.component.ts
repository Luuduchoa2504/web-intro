import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {AuthService} from "../../core/auth/auth.service";
import {CustomToastService} from "../../shared/utils/custom-toast.service";
import {NgxSpinnerService} from "ngx-spinner";
import {finalize} from "rxjs";
import {ToastrService} from "ngx-toastr";
// import * as jwt from 'jsonwebtoken';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, AfterViewInit {

  username?: ElementRef;

  authenticationError = false;
  passwordVisible = false;
  loginForm = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });



  constructor(
    // private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private accountService: LoginService,
    private authService: AuthService,
    private _toastService: CustomToastService,
    private _spinner: NgxSpinnerService,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.username) {
      this.username.nativeElement.focus();
    }
  }


  submitForm() {
    const username = this.loginForm.get('username')?.value;
    const pass = this.loginForm.get('password')?.value;
    if (this.loginForm.invalid) {
      return;
    }
    this._spinner.show();
    this.accountService.login(username, pass)
      .pipe((finalize(() => {
        this._spinner.hide();
      })))
      .subscribe(
        (res: any) => {
        this.authenticationError = false;
        if (res) {
          localStorage.setItem('token', `${res.accessToken}`);
          localStorage.setItem('userInfo', `${res?.user?.name}`)
          this.authService.setUserInfo(res?.user?.name);
          this.router.navigate(['/']);
          this._toastService.showSuccess('Thành công', 'Đăng nhâp thành công');
        }
      },
        (err) => {
          this._toastService.showError('Thất bại', `${err.error.msg}`)
        }
    );
  }
}
