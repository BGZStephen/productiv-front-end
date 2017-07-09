import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SiteViewComponent } from './components/site-view/site-view.component';
import { SiteRegisterComponent } from './components/site-register/site-register.component';
import { SiteLoginComponent } from './components/site-login/site-login.component';
import { SiteNavbarComponent } from './components/site-navbar/site-navbar.component';
import { SiteHomeComponent } from './components/site-home/site-home.component';

import { routes } from "../app.routes"

@NgModule({
  declarations: [SiteViewComponent, SiteRegisterComponent, SiteLoginComponent, SiteNavbarComponent, SiteHomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: []
})
export class SiteModule { }
