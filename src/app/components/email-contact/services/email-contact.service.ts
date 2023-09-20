import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class EmailContactService {
  public resourceUrl = `${Constants.SERVER_API_URL}`;

  constructor(private http: HttpClient) { }

  send(req?: any) {
    return this.http.post(`${this.resourceUrl}/api/ticket`, req);
  }
}
