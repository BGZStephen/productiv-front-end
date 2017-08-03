import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule
  ],
  providers: [],
  bootstrap: []
})

export class UserManagementModule { }
