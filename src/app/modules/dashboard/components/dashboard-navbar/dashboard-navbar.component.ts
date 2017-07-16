import { Component, OnInit } from '@angular/core';
import { MenuBuilderService } from '../../services/menu-builder.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  activeSubmenu: number = -1;
  menuVisible = false;
  menu: Array<object> = [];

  constructor(
    private menuBuilder: MenuBuilderService
  ) { }

  ngOnInit() {
    this.menu = this.menuBuilder.buildNavbar();
  }

  menuVisibilityToggle() {
    this.menuVisible = !this.menuVisible;
  }

  menuVisibilityStyling() {
    if (screen.width >= 1024) {
      this.menuVisible = true;
    }
    if (!this.menuVisible) {
      return {'visibility': '0', 'opacity': '0'};
    } else {
      return {'visibility': '1', 'opacity': '1'};
    }
  }

  menuVisibilityOnResize() {
    if (screen.width >= 1024) {
      this.menuVisible = true;
    } else {
      this.menuVisible = false;
    }
  }

  submenuVisibilityToggle(index) {
    if (index === this.activeSubmenu) {
      this.activeSubmenu = -1;
    } else {
      this.activeSubmenu = index;
    }
  }

  submenuVisibilityStyling(index) {
    if (index !== this.activeSubmenu) {
      return {'max-height': '0'};
    } else {
      const maxHeight = (
        document.getElementsByClassName('top-level-menu')[index]
        .getElementsByClassName('second-level-menu')[0].children.length * 45) + 'px';
      return {'max-height': maxHeight};
    }
  }

}
