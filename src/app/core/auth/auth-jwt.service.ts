import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LocalStorageService, SessionStorageService } from "ngx-webstorage";
import { Constants } from "../../helpers";
import { Login } from "../../components/sign-in/login.model";
import { map, Observable } from "rxjs";

type JwtToken = {
  id_token: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthJwtService {

  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService,
  ) { }

  getToken(): string {
    const tokenInLocalStorage: string | null = this.$localStorage.retrieve(
      Constants.KEY_TOKEN
    );
    const tokenInSessionStorage: string | null = this.$sessionStorage.retrieve(
      Constants.KEY_TOKEN
    );
    return tokenInLocalStorage ?? tokenInSessionStorage ?? '';
  }

  login(credentials: Login): Observable<void> {
    return this.http
      .post<JwtToken>(
        Constants.SERVER_API_URL + 'api/login',
        //hardcode rememberMe to false
        {...credentials, rememberMe: false}
      )
      .pipe(
        map((response) =>
          this.authenticateSuccess(response, credentials.rememberMe)
        )
      );
  }

  private authenticateSuccess(response: JwtToken, rememberMe: boolean): void {
    const jwt = response.id_token;
    if (rememberMe) {
      this.$localStorage.store(Constants.KEY_TOKEN, jwt);
      this.$sessionStorage.clear(Constants.KEY_TOKEN);
    } else {
      this.$sessionStorage.store(Constants.KEY_TOKEN, jwt);
      this.$localStorage.clear(Constants.KEY_TOKEN);
    }
  }
}
