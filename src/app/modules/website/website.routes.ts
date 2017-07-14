import { Routes, RouterModule } from '@angular/router';

// site specific
import { WebsiteViewComponent, WebsiteNavbarComponent, WebsiteHomeComponent,
         WebsiteLoginComponent, WebsiteRegisterComponent } from './components/website-components-barrel';


const WEBSITE_ROUTES: Routes = [
  {path: 'site', component: WebsiteViewComponent, children: [
    {path: '', component: WebsiteHomeComponent, outlet: 'websiteOutlet'},
    {path: 'login', component: WebsiteLoginComponent, outlet: 'websiteOutlet'},
    {path: 'register', component: WebsiteRegisterComponent, outlet: 'websiteOutlet'}
  ]}
];

export const WebsiteRoutes = RouterModule.forChild(WEBSITE_ROUTES);
