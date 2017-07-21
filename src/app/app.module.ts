import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutes } from './app.routes';

// services
import { NotificationService } from './services/notification.service';
import { ValidatorsService } from './services/validators.service';
import { MenuBuilderService } from './services/menu-builder.service';
import { ProductivApiService } from './services/productiv-api.service';

// modules
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { WebsiteModule } from './modules/website/website.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    WebsiteModule,
    DashboardModule,
  ],
  providers: [NotificationService, ValidatorsService, MenuBuilderService, ProductivApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
