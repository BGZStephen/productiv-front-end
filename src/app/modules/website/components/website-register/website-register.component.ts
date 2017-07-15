import { Component, OnInit } from '@angular/core';
import { WebsiteApiService } from '../../website-api.service';
import { ValidatorsService } from '../../../../helpers/validators.service';
import { NotificationService } from '../../../../helpers/notification.service'

@Component({
  selector: 'app-website-register',
  templateUrl: './website-register.component.html',
  styleUrls: ['./website-register.component.scss']
})
export class WebsiteRegisterComponent implements OnInit {

  constructor(
    private apiService: WebsiteApiService,
    private notificationService: NotificationService,
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
        this.notificationService.flashSuccess("Registration successful")
      },
      error => {
        this.notificationService.flashError(error)
      });
    }
  }
}
