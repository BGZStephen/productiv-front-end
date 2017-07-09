import { Routes, RouterModule } from "@angular/router"

// site specific
import { SiteViewComponent, SiteNavbarComponent, SiteHomeComponent, SiteLoginComponent, SiteRegisterComponent } from "./site/components/site-components-barrel"

import { DashboardViewComponent } from "./dashboard/components/dashboard-view/dashboard-view.component"

const APP_ROUTES: Routes = [
  {path: "", redirectTo: "/site", pathMatch: "full"},
  {path: "site", component: SiteViewComponent, children: [
    {path: "", component: SiteHomeComponent, outlet: "siteOutlet"},
    {path: "login", component: SiteLoginComponent, outlet: "siteOutlet"},
    {path: "register", component: SiteRegisterComponent, outlet: "siteOutlet"}
  ]}
]

export const routes = RouterModule.forRoot(APP_ROUTES)
