import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable()
export class ValidatorsService {

  constructor(
    private notification: NotificationService,
  ) { }

  validateRegistration(userObject) {
    const nameValid = this.validateName(userObject.firstName, userObject.lastName);
    const emailValid = this.validateEmail(userObject.email);
    const passwordValid = this.comparePassword(userObject.password, userObject.passwordConfirm);

    if (nameValid && emailValid && passwordValid) {
      return true;
    } else {
      return false;
    };
  }

  validateLogin(userObject) {
    const emailValid = this.validateEmail(userObject.email);
    const passwordValid = this.validatePasswordLength(userObject.password);

    if (emailValid && passwordValid) {
      return true;
    } else {
      return false;
    }
  }

  validateName(firstName, lastName) {
    if (firstName.length <= 1 || lastName.length <= 1) {
      this.notification.flashError('First & Last name must be longer than 1 character');
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,9}/;
    if (!regex.test(email.toUpperCase())) {
      this.notification.flashError('Invalid Email address');
      return false;
    } else {
      return true;
    }
  }

  validatePasswordLength(password) {
    if (password.length === 0) {
      this.notification.flashError('Password must not be empty');
      return false;
    } else {
      return true;
    }
  }

  comparePassword(password, passwordConfirm) {
    if (password.length <= 6) {
      this.notification.flashError('Password must be greater than 6 characters');
      return false;
    } else if (password !== passwordConfirm) {
      this.notification.flashError('Password confirmation does not match');
      return false;
    } else {
      return true;
    }
  }
}
