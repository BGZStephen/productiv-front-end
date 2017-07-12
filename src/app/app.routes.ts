import { Routes, RouterModule } from '@angular/router';

import { DashboardViewComponent } from './dashboard/components/dashboard-view/dashboard-view.component';

import { WebsiteViewComponent, WebsiteNavbarComponent, WebsiteHomeComponent,
         WebsiteLoginComponent, WebsiteRegisterComponent } from './website/components/website-components-barrel';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/site', pathMatch: 'full'},
  {path: 'site', component: WebsiteViewComponent, children: [
    {path: '', component: WebsiteHomeComponent, outlet: 'websiteOutlet'},
    {path: 'login', component: WebsiteLoginComponent, outlet: 'websiteOutlet'},
    {path: 'register', component: WebsiteRegisterComponent, outlet: 'websiteOutlet'}
  ]}
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
