import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductivApiService } from '../../services/productiv-api.service';
import { NotificationService } from '../../../../services/notification.service';
import { ValidatorsService } from '../../../../services/validators.service';

@Component({
  selector: 'app-website-login',
  templateUrl: './website-login.component.html',
})
export class WebsiteLoginComponent implements OnInit {

  constructor(
    private apiService: ProductivApiService,
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
        this.notificationService.flashSuccess('Login succesdsful', 900);
        this.apiService.storeToken(res.json().token);
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      },
      error => {
        this.notificationService.flashError('Error: Invalid email or password');
      });
    }
  }

}
