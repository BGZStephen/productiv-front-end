import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

// components
import { WebsiteViewComponent, WebsiteRegisterComponent, WebsiteLoginComponent,
         WebsiteNavbarComponent, WebsiteHomeComponent } from './components/website-components-barrel';

// routes
import { WebsiteRoutes } from './website.routes';

@NgModule({
  declarations: [
    WebsiteViewComponent,
    WebsiteRegisterComponent,
    WebsiteLoginComponent,
    WebsiteNavbarComponent,
    WebsiteHomeComponent
  ],
  imports: [
    CommonModule,
    FlashMessagesModule,
    FormsModule,
    HttpModule,
    WebsiteRoutes,
  ],
  providers: [],
  bootstrap: []
})
export class WebsiteModule { }
