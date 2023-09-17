import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Constants } from "../../../helpers/constants";

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  public resourceUrl = `${Constants.SERVER_API_URL}`;

  constructor(private http: HttpClient) { }

  send(req?: any) {
    console.log(req)
    return this.http.post(`${this.resourceUrl}/api/email`, req);
  }
}
