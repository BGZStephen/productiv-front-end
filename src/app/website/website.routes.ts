import { Routes, RouterModule } from "@angular/router"

// site specific
import { WebsiteViewComponent, WebsiteNavbarComponent, WebsiteHomeComponent, WebsiteLoginComponent, WebsiteRegisterComponent } from "./components/website-components-barrel"


const WEBSITE_ROUTES: Routes = [
  {path: "site", component: WebsiteViewComponent, children: [
    {path: "", component: WebsiteHomeComponent, outlet: "siteOutlet"},
    {path: "login", component: WebsiteLoginComponent, outlet: "siteOutlet"},
    {path: "register", component: WebsiteRegisterComponent, outlet: "siteOutlet"}
  ]}
]

export const WebsiteRoutes = RouterModule.forChild(WEBSITE_ROUTES)
