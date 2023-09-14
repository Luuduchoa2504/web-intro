import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  accountLabel: string = 'My Account';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe((userInfo) => {
      if (userInfo && userInfo.username) {
        this.accountLabel = userInfo.username;
      }
    })
  }
}
