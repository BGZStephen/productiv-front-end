import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-site-navbar',
  templateUrl: './site-navbar.component.html',
  styleUrls: ['./site-navbar.component.scss']
})
export class SiteNavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  clearComponent() {
    this.router.navigate(['/site', {outlets: {'siteOutlet': null}}]);
  }

  setComponent(component) {
    this.router.navigate(['/site', {outlets: {'siteOutlet': [component]}}]);
  }

}
