import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SiteApiService {

  constructor(
    private http: Http
  ) { }

}
