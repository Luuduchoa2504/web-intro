import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {AuthService} from "../../core/auth/auth.service";
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
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.username) {
      this.username.nativeElement.focus();
    }
  }

  // login(): void {
  //
  //   this.loginService
  //     .login({
  //       username: this.loginForm.get('username')!.value,
  //       password: this.loginForm.get('password')!.value,
  //     }).pipe()
  //     .subscribe(
  //       (res) => {
  //         this.authenticationError = false;
  //         this.loginGranted.emit(res);
  //       },
  //       (err) => {
  //         this.authenticationError = true;
  //         this.loginFailed.emit(err);
  //       }
  //     );
  // }

  submitForm() {
    const username = this.loginForm.get('username')?.value;
    const pass = this.loginForm.get('password')?.value;
    console.log(username, pass);

    if (this.loginForm.invalid) {
      return;
    }
    this.accountService.login(username, pass).subscribe((res: any) => {
      this.authenticationError = false;
      if (res) {
        localStorage.setItem('token', `${res.accessToken}`);
        localStorage.setItem('userInfo', `${res?.user?.name}`)
        this.router.navigate(['/']);        
        this.authService.setUserInfo(res?.user?.name);
      }
    });
  }

}
