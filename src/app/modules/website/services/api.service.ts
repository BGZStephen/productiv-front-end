import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ApiService {

  siteAuthToken: String = environment.siteAuthToken;
  apiUrl: String = environment.apiUrl;

  constructor(
    private http: Http,
  ) { }

  login(userObject) {
    let headers = new Headers()
    headers.append('Authorization', `${this.siteAuthToken}`)
    return this.http.post(`${this.apiUrl}/users/authenticate?siteAuthToken=${this.siteAuthToken}`, userObject, {headers: headers});
  }

  register(userObject) {
    let headers = new Headers()
    headers.append('Authorization', `${this.siteAuthToken}`)
    return this.http.post(`${this.apiUrl}/users?siteAuthToken=${this.siteAuthToken}`, userObject, {headers: headers});
  }

  storeToken(token) {
    localStorage.setItem('token', token);
  }

}
