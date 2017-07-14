import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class NotificationService {

  constructor(
    private flashMessage: FlashMessagesService,
  ) { }

  flashError(error) {
    this.flashMessage.show(error, {cssClass: 'flash-failure', timeout: 2000});
    return false;
  }

}
