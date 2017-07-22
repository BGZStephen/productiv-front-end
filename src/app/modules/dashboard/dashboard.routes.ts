import { Routes, RouterModule } from '@angular/router';

// dashboard specific
import { DashboardViewComponent, DashboardHomeComponent} from './components/dashboard-components-barrel';

const DASHBOARD_ROUTES: Routes = [
  {path: 'dashboard', component: DashboardViewComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: DashboardHomeComponent},
    {path: 'modules', children: [
      {path: '', redirectTo: 'manage', pathMatch: 'full'},
      {path: 'manage', component: DashboardHomeComponent},
      {path: 'add', component: DashboardHomeComponent},
    ]},
  ]}
];

export const DashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES);
