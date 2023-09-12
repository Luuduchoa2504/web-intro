import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LocalStorageService, SessionStorageService} from "ngx-webstorage";
import {Constants} from "../../helpers";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly SERVER_API_URL: any;

  constructor(private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) {
    this.SERVER_API_URL = Constants.SERVER_API_URL;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url || (request.url.startsWith('http')
      && !(Constants.SERVER_API_URL && request.url.startsWith(Constants.SERVER_API_URL)))) {
      return next.handle(request);
    }

    const token: string | null = this.localStorage.retrieve(Constants.KEY_TOKEN) ?? this.sessionStorage.retrieve(Constants.KEY_TOKEN);
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}
