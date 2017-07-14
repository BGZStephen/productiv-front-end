import { Routes, RouterModule } from '@angular/router';

import { DashboardViewComponent } from './modules/dashboard/components/dashboard-view/dashboard-view.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/site', pathMatch: 'full'},
  {path: 'site', loadChildren: './modules/website/website.module#WebsiteModule'}
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
