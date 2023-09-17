import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Constants } from 'src/app/helpers/constants';
import { AuthJwtService } from 'src/app/core/auth/auth-jwt.service';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public resourceUrl = `${Constants.SERVER_API_URL}`;

  constructor(private http: HttpClient, private authServerProvider: AuthJwtService) { }

  login(email: string | null | undefined, password: string | null | undefined) {
    return this.http.post(`${this.resourceUrl}/api/login`, {email, password});
  }

  logout() {
    this.authServerProvider.logout().subscribe();
  }

  register(req?: any): Observable<any> {
    return this.http.post(`${this.resourceUrl}/api/register`, req);
  }
}
