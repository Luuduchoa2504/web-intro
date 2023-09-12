import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Login} from "../../components/sign-in/login.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  userInfo = new BehaviorSubject<{username: string} | null>(null);

  setUserInfo(username: string) {
    this.userInfo.next({username});
  }

  getUserInfo() {
    return this.userInfo.asObservable();
  }

}
