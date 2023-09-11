import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Constants } from 'src/app/helpers/constants';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public resourceUrl = `${Constants.SERVER_API_URL}`;

  constructor(private http: HttpClient,) { }

  login(username: string, password: string) {
    return this.http.post(`${this.resourceUrl}/api/login`, {username, password});
  }
}
