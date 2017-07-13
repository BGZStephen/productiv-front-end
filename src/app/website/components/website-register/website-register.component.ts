import { Component, OnInit } from '@angular/core';
import { WebsiteApiService } from '../../website-api.service';
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'app-website-register',
  templateUrl: './website-register.component.html',
  styleUrls: ['./website-register.component.scss']
})
export class WebsiteRegisterComponent implements OnInit {

  constructor(
    private apiService: WebsiteApiService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  register(userObject) {
    this.validateName(userObject.firstName, userObject.lastName)
    this.validateEmail(userObject.email)
    this.apiService.register(userObject)
    .subscribe(res => {
      console.log(res)
    },
    error => {
      console.log(error)
    })
  }

  validateName(firstName, lastName) {
    if(firstName.length <= 1 || lastName.length <= 1) {

      return this.flashError("First & Last name must be longer than 1 character");
    }
  }

  validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(email)) {
      return;
    } else {
      return this.flashError("Invalid Email address");
    }
  }

  flashError(error) {
    return this.flashMessage.show(error, {cssClass: "flash-failure", timeout: 2000})
  }

}
