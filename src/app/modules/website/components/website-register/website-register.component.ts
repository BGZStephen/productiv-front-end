import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductivApiService } from '../../../../services/productiv-api.service';
import { ValidatorsService } from '../../../../services/validators.service';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'app-website-register',
  templateUrl: './website-register.component.html',
  styleUrls: ['./website-register.component.scss']
})
export class WebsiteRegisterComponent implements OnInit {

  constructor(
    private apiService: ProductivApiService,
    private notificationService: NotificationService,
    private router: Router,
    private validatorService: ValidatorsService,
  ) { }

  ngOnInit() {
  }

  register(userObject) {
    const validationPass = this.validatorService.validateRegistration(userObject);
    if (!validationPass) {
      return;
    } else {
      this.apiService.register({user: userObject})
      .subscribe(res => {
        this.notificationService.flashSuccess('Registration successful');
        this.apiService.storeToken(res.json().token);
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 2000);
      },
      error => {
        this.notificationService.flashError(`Error: ${error._body}`);
      });
    }
  }
}
