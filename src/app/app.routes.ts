import { Routes, RouterModule } from '@angular/router';

import { DashboardViewComponent } from './dashboard/components/dashboard-view/dashboard-view.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/site', pathMatch: 'full'},
  {
    path: 'site',
    loadChildren: 'src/website/website.module#WebsiteModule'
  }
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
