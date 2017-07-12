import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website-navbar',
  templateUrl: './website-navbar.component.html',
  styleUrls: ['./website-navbar.component.scss']
})
export class WebsiteNavbarComponent implements OnInit {

  navbarVisible = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  clearComponent() {
    this.router.navigate(['/site', {outlets: {'siteOutlet': null}}]);
  }

  setComponent(component) {
    this.router.navigate(['/site', {outlets: {'siteOutlet': [component]}}]);
  }

  toggleNavbar() {
    this.navbarVisible = !this.navbarVisible;
  }

  resizeNavbarVisibility() {
    if (screen.width >= 768) {
      this.navbarVisible = false;
    }
  }

  navbarStyle() {
    if (screen.width >= 768) {
      this.navbarVisible = true;
      return {};
    }
    if (this.navbarVisible) {
      return {'left': '0'};
    } else {
      return {'left': '-100vw'};
    }
  }

}
