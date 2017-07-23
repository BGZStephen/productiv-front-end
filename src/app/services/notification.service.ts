import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class NotificationService {

  constructor(
    private flashMessage: FlashMessagesService,
  ) { }

  flashError(error, time = 2000) {
    this.flashMessage.show(error, {cssClass: 'flash-failure', timeout: time});
  }

  flashSuccess(message, time = 2000) {
    this.flashMessage.show(message, {cssClass: 'flash-success', timeout: time});
  }

}
