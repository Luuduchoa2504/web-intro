import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Constants } from 'src/app/helpers/constants';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public resourceUrl = `${Constants.SERVER_API_URL}`;

  constructor(private http: HttpClient) { }

  login(email: string | null | undefined, password: string | null | undefined) {
    return this.http.post(`${this.resourceUrl}/api/login`, {email, password});
  }
}
