import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/site', pathMatch: 'full'},
  {path: 'site', loadChildren: './modules/website/website.module#WebsiteModule'},
  {path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
