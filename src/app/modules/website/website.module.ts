import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

// components
import { WebsiteViewComponent, WebsiteRegisterComponent, WebsiteLoginComponent,
         WebsiteNavbarComponent, WebsiteHomeComponent } from './components/website-components-barrel';

// routes
import { WebsiteRoutes } from './website.routes';

// services
import { WebsiteApiService } from './website-api.service';

@NgModule({
  declarations: [
    WebsiteViewComponent,
    WebsiteRegisterComponent,
    WebsiteLoginComponent,
    WebsiteNavbarComponent,
    WebsiteHomeComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule,
    FormsModule,
    HttpModule,
    WebsiteRoutes,
  ],
  providers: [WebsiteApiService],
  bootstrap: []
})
export class WebsiteModule { }
