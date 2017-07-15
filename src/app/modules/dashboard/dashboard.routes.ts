import { Routes, RouterModule } from '@angular/router';

// dashboard specific
import { DashboardViewComponent, DashboardHomeComponent} from './components/dashboard-components-barrel';

const DASHBOARD_ROUTES: Routes = [
  {path: 'dashboard', component: DashboardViewComponent, children: [
    {path: '', component: DashboardHomeComponent, outlet: 'dashboardOutlet'},
  ]}
];

export const DashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES);
