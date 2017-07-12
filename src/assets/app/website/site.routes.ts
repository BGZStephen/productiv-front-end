import { Routes, RouterModule } from "@angular/router"

// site specific
import { SiteViewComponent, SiteNavbarComponent, SiteHomeComponent, SiteLoginComponent, SiteRegisterComponent } from "./components/site-components-barrel"


const SITE_ROUTES: Routes = [
  {path: "site", component: SiteViewComponent, children: [
    {path: "", component: SiteHomeComponent, outlet: "siteOutlet"},
    {path: "login", component: SiteLoginComponent, outlet: "siteOutlet"},
    {path: "register", component: SiteRegisterComponent, outlet: "siteOutlet"}
  ]}
]

export const SiteRoutes = RouterModule.forChild(SITE_ROUTES)
