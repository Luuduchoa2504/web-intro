import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
// import {LoginService} from "./login.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, AfterViewInit {
  // @Output() loginGranted = new EventEmitter<any>();
  // @Output() loginFailed = new EventEmitter<any>();


  username?: ElementRef;

  authenticationError = false;
  passwordVisible = false;
  loginForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });


  constructor(
    // private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
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

  // submitForm() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //
  //   this.accountService
  //     .login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
  //     .subscribe((response) => {
  //       this.router.navigate(['/dashboard']);
  //     });
  // }
}
