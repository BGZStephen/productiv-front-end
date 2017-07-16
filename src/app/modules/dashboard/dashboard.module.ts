import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DashboardViewComponent, DashboardNavbarComponent, DashboardHomeComponent,
         DashboardNotificationBarComponent} from './components/dashboard-components-barrel';

// Routes
import { DashboardRoutes } from './dashboard.routes';

@NgModule({
  declarations: [
    DashboardViewComponent,
    DashboardHomeComponent,
    DashboardNavbarComponent,
    DashboardNotificationBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardRoutes,
    FlashMessagesModule
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
