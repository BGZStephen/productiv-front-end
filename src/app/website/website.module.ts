import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WebsiteViewComponent } from './components/website-view/website-view.component';
import { WebsiteRegisterComponent } from './components/website-register/website-register.component';
import { WebsiteLoginComponent } from './components/website-login/website-login.component';
import { WebsiteNavbarComponent } from './components/website-navbar/website-navbar.component';
import { WebsiteHomeComponent } from './components/website-home/website-home.component';

import { WebsiteRoutes } from './website.routes';

@NgModule({
  declarations: [WebsiteViewComponent, WebsiteRegisterComponent, WebsiteLoginComponent, WebsiteNavbarComponent, WebsiteHomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WebsiteRoutes
  ],
  providers: [],
  bootstrap: []
})
export class WebsiteModule { }
