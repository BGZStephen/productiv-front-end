import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuBuilderService } from '../../../services/menu-builder.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
})
export class DashboardNavbarComponent implements OnInit {

  topLevelMenuVisible = false;
  activeSecondLevelMenu: number = -1;
  activeThirdLevelMenu: number = -1;
  menu = {
    items: [],
    secondLevelHeight: null,
    thirdLevelHeight: null
  };

  constructor (
    private menuBuilder: MenuBuilderService,
    private notificationService: NotificationService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.menu.items = this.menuBuilder.buildNavbar();
  }

  logout() {
    localStorage.clear();
    this.notificationService.flashSuccess('Logout successful', 900);
    setTimeout(() => {
      this.router.navigate(['/site']);
    }, 1000)
  }

  topLevelMenuVisibilityOnResize() {
    if (screen.width >= 1024) {
      this.topLevelMenuVisible = true;
    } else {
      this.topLevelMenuVisible = false;
    }
  }

  topLevelMenuVisibilityStyling() {
    if (screen.width >= 1024) {
      this.topLevelMenuVisible = true;
    }
    if (!this.topLevelMenuVisible) {
      return {'visibility': '0', 'opacity': '0'};
    } else {
      return {'visibility': '1', 'opacity': '1'};
    }
  }

  topLevelMenuVisibilityToggle() {
    this.topLevelMenuVisible = !this.topLevelMenuVisible;
  }

  setMenuHeight(second = null, third = null) {
    if (parseInt(third) >= 0 && parseInt(second) >= 0) {
      this.activeThirdLevelMenu = third == this.activeThirdLevelMenu ? -1 : third;
      this.menu.thirdLevelHeight = document.getElementsByClassName('second-level-item')[third].getElementsByClassName('third-level-menu')[0].children.length * 45;
      this.menu.secondLevelHeight = document.getElementsByClassName('top-level-item')[second].getElementsByClassName('second-level-menu')[0].children.length * 45 + this.menu.thirdLevelHeight;
    } else if (!third && parseInt(second) >= 0) {
      this.activeThirdLevelMenu = -1;
      this.activeSecondLevelMenu = second == this.activeSecondLevelMenu ? -1 : second;
      this.menu.secondLevelHeight = document.getElementsByClassName('top-level-item')[second].getElementsByClassName('second-level-menu')[0].children.length * 45;
      this.menu.thirdLevelHeight = 0;
    }
  }

  secondLevelMenuVisibilityStyling(index) {
    if (index != this.activeSecondLevelMenu) {
      return {'max-height': '0'};
    } else {
      return {'max-height': this.menu.secondLevelHeight + 'px'};
    }
  }

  thirdLevelMenuVisibilityStyling(index) {
    if (index !== this.activeThirdLevelMenu) {
      return {'max-height': '0'};
    } else {
      return {'max-height': this.menu.thirdLevelHeight + 'px'};
    }
  }
}
