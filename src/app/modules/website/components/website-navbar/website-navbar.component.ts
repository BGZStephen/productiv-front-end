import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website-navbar',
  templateUrl: './website-navbar.component.html',
})
export class WebsiteNavbarComponent implements OnInit {

  navbarVisible;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
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
