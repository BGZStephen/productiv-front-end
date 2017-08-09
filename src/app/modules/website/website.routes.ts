import { Routes, RouterModule } from '@angular/router';

// site specific
import { WebsiteViewComponent, WebsiteNavbarComponent, WebsiteHomeComponent,
         WebsiteLoginComponent, WebsiteRegisterComponent } from './website-components-barrel';


const WEBSITE_ROUTES: Routes = [
  {path: 'site', component: WebsiteViewComponent, children: [
    {path: '', component: WebsiteHomeComponent},
    {path: 'login', component: WebsiteLoginComponent},
    {path: 'register', component: WebsiteRegisterComponent}
  ]}
];

export const WebsiteRoutes = RouterModule.forChild(WEBSITE_ROUTES);
