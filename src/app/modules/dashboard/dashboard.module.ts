import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DashboardViewComponent, DashboardNavbarComponent, DashboardHomeComponent,
         DashboardNotificationBarComponent} from './dashboard-components-barrel';

import { ProfileViewComponent } from './dashboard-components-barrel';

// Routes
import { DashboardRoutes } from './dashboard.routes';

// services
import { MenuBuilderService } from './services/menu-builder.service'

@NgModule({
  declarations: [
    DashboardViewComponent,
    DashboardHomeComponent,
    DashboardNavbarComponent,
    DashboardNotificationBarComponent,
    ProfileViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DashboardRoutes,
    FlashMessagesModule,
  ],
  providers: [MenuBuilderService],
  bootstrap: []
})
export class DashboardModule { }
