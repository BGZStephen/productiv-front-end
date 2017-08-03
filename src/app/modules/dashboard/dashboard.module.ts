import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DashboardViewComponent, DashboardNavbarComponent, DashboardHomeComponent,
         DashboardNotificationBarComponent} from './components/dashboard-components-barrel';

// Routes
import { DashboardRoutes } from './dashboard.routes';

// Modules
import { UserManagementModule } from './modules/user-management/user-management.module';

@NgModule({
  declarations: [
    DashboardViewComponent,
    DashboardHomeComponent,
    DashboardNavbarComponent,
    DashboardNotificationBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DashboardRoutes,
    FlashMessagesModule,
    UserManagementModule
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
