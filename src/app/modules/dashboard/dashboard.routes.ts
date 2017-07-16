import { Routes, RouterModule } from '@angular/router';

// dashboard specific
import { DashboardViewComponent, DashboardHomeComponent} from './components/dashboard-components-barrel';

const DASHBOARD_ROUTES: Routes = [
  {path: 'dashboard', component: DashboardViewComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: DashboardHomeComponent, outlet: 'dashboardOutlet'},
    {path: 'modules-add', component: DashboardHomeComponent, outlet: 'dashboardOutlet'},
    {path: 'modules-manage', component: DashboardHomeComponent, outlet: 'dashboardOutlet'},
  ]}
];

export const DashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES);
