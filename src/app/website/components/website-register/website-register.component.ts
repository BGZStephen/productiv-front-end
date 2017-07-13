import { Component, OnInit } from '@angular/core';
import { WebsiteApiService } from '../../website-api.service';

@Component({
  selector: 'app-website-register',
  templateUrl: './website-register.component.html',
  styleUrls: ['./website-register.component.scss']
})
export class WebsiteRegisterComponent implements OnInit {

  constructor(
    private apiService: WebsiteApiService,
  ) { }

  ngOnInit() {
  }

  register(userObject) {
    console.log(userObject);
    this.apiService.register(userObject)
    .subscribe(res => {
      console.log(res)
    },
    error => {
      console.log(error)
    })
  }

}
