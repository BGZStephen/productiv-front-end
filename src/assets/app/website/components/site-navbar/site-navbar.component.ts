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
  ) {}

  navbarVisible: boolean = false;

  ngOnInit() {
  }

  clearComponent() {
    this.router.navigate(['/site', {outlets: {'siteOutlet': null}}]);
  }

  setComponent(component) {
    this.router.navigate(['/site', {outlets: {'siteOutlet': [component]}}]);
  }

  toggleNavbar() {
    this.navbarVisible = !this.navbarVisible
  }

  resizeNavbarVisibility() {
    if(screen.width >= 768) {
      this.navbarVisible = false
    }
  }

  navbarStyle() {
    if(screen.width >= 768) {
      this.navbarVisible = true
      return {}
    }
    if(this.navbarVisible) {
      return {'left': '0'}
    } else {
      return {'left': '-100vw'}
    }
  }

}
