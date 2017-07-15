import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class WebsiteApiService {

  siteAuthToken: String = environment.siteAuthToken;
  apiUrl: String = environment.apiUrl;

  constructor(
    private http: Http,
  ) { }

  login(userObject) {
    return this.http.post(`${this.apiUrl}/users/authenticate?siteAuthToken=${this.siteAuthToken}`, userObject);
  }

  register(userObject) {
    return this.http.post(`${this.apiUrl}/users?siteAuthToken=${this.siteAuthToken}`, userObject);
  }

  storeToken(token) {
    localStorage.setItem('token', token);
  }

}
