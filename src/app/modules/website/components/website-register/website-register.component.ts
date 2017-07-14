import { Component, OnInit } from '@angular/core';
import { WebsiteApiService } from '../../website-api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidatorsService } from '../../../../helpers/validators.service';

@Component({
  selector: 'app-website-register',
  templateUrl: './website-register.component.html',
  styleUrls: ['./website-register.component.scss']
})
export class WebsiteRegisterComponent implements OnInit {

  constructor(
    private apiService: WebsiteApiService,
    private flashMessage: FlashMessagesService,
    private validatorService: ValidatorsService,
  ) { }

  ngOnInit() {
  }

  register(userObject) {
    const validationPass = this.validatorService.validateUser(userObject);
    if (!validationPass) {
      return;
    } else {
      this.apiService.register(userObject)
      .subscribe(res => {
        console.log(res);
      },
      error => {
        console.log(error);
      });
    }
  }
}
