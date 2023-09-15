import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LoginService } from '../sign-in/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  accountLabel: string = 'My Account';
  isLoggedIn = false;
  constructor(private authService: AuthService, private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      this.isLoggedIn = true;
      this.accountLabel = userInfo;
    } 
    this.authService.getUserInfo().subscribe((userInfo) => {
      if (userInfo && userInfo.username) {
        this.accountLabel = userInfo.username;
        this.isLoggedIn = true;
      }
    })
  }

  logout() {
    this.loginService.logout();
    location.reload();
    this.router.navigate(['/']);
  }
}
