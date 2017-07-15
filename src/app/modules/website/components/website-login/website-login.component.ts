import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteApiService } from '../../website-api.service';
import { NotificationService } from '../../../../helpers/notification.service';
import { ValidatorsService } from '../../../../helpers/validators.service';

@Component({
  selector: 'app-website-login',
  templateUrl: './website-login.component.html',
  styleUrls: ['./website-login.component.scss']
})
export class WebsiteLoginComponent implements OnInit {

  constructor(
    private apiService: WebsiteApiService,
    private notificationService: NotificationService,
    private router: Router,
    private validatorService: ValidatorsService,
  ) { }

  ngOnInit() {
  }

  login(userObject) {
    const validationPass = this.validatorService.validateLogin(userObject);
    if (!validationPass) {
      return;
    } else {
      this.apiService.login(userObject)
      .subscribe(res => {
        this.notificationService.flashSuccess('Login succesdsful');
        this.apiService.storeToken(res.json().token);
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1500);
      },
      error => {
        this.notificationService.flashError('Error: Invalid email or password');
      });
    }
  }

}
