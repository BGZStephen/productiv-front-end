import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductivApiService {

  siteAuthToken: String = environment.siteAuthToken;
  apiUrl: String = environment.apiUrl;

  constructor(
    private http: Http,
  ) { }

  login(userObject) {
    const headers = new Headers();
    headers.append('Authorization', `${this.siteAuthToken}`);
    return this.http.post(`${this.apiUrl}/users/authenticate?siteAuthToken=${this.siteAuthToken}`, userObject, {headers: headers});
  }

  register(userObject) {
    const headers = new Headers();
    headers.append('Authorization', `${this.siteAuthToken}`);
    return this.http.post(`${this.apiUrl}/users?siteAuthToken=${this.siteAuthToken}`, userObject, {headers: headers});
  }

  storeToken(token) {
    localStorage.setItem('token', token);
  }

}
