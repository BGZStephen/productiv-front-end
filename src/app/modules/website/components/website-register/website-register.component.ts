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
    let validationPass = this.validateUser(userObject)
    if(!validationPass) {
      return;
    } else {
      this.apiService.register(userObject)
      .subscribe(res => {
        console.log(res)
      },
      error => {
        console.log(error)
      })
    }
  }

  validateUser(userObject) {
    let nameValid = this.validateName(userObject.firstName, userObject.lastName)
    let emailValid = this.validateEmail(userObject.email)
    let passwordValid = this.validatePassword(userObject.password, userObject.confirmPassword)

    if(nameValid && emailValid && passwordValid) {
      return true;
    } else {
      return false;
    }
  }

  validateName(firstName, lastName) {
    if(firstName.length <= 1 || lastName.length <= 1) {
      this.flashError("First & Last name must be longer than 1 character");
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regex.test(email)) {
      this.flashError("Invalid Email address");
      return false;
    } else {
      return true;
    }
  }

  validatePassword(password, confirmPassword) {
    if(password.length <= 6) {
      this.flashError("Password must be greater than 6 characters");
      return false;
    } else if (password != confirmPassword) {
      this.flashError("Password confirmation does not match");
      return false;
    } else {
      return true;
    }
  }

  flashError(error) {
    this.flashMessage.show(error, {cssClass: "flash-failure", timeout: 2000})
    return false;
  }

}
