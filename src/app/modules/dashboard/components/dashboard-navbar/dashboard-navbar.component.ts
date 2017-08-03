import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuBuilderService } from '../../../../services/menu-builder.service';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  topLevelMenuVisible = false;
  activeSecondLevelMenu: number = -1;
  activeThirdLevelMenu: number = -1;
  menu = {
    height: null,
    items: [],
    top: null,
    second: null,
    third: null
  }

  constructor(
    private menuBuilder: MenuBuilderService,
    private notificationService: NotificationService,
    private router: Router,
  ) { }

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
    if (third && second) {
      this.activeSecondLevelMenu = second == this.activeSecondLevelMenu ? -1 : second
      this.activeThirdLevelMenu = third == this.activeThirdLevelMenu ? -1 : third
      this.menu.third = document.getElementsByClassName('third-level-menu')[third].children.length * 45,
      this.menu.second = document.getElementsByClassName('second-level-menu')[second].children.length * 45,
      this.menu.top = document.getElementsByClassName('top-level-menu')[0].children.length * 45
    } else if (!third && second) {
      this.activeSecondLevelMenu = second == this.activeSecondLevelMenu ? -1 : second
      this.menu.second = document.getElementsByClassName('top-level-item')[second].getElementsByClassName('second-level-menu')[0].children.length * 45,
      this.menu.top = document.getElementsByClassName('top-level-menu')[0].children.length * 45
    }
  }

  secondLevelMenuVisibilityStyling(index) {
    if (index != this.activeSecondLevelMenu) {
      return {'max-height': '0'};
    } else {
      const maxHeight = (
        document.getElementsByClassName('top-level-item')[index]
        .getElementsByClassName('second-level-menu')[0].children.length * 45) + 'px';
        return {'max-height': maxHeight};
      }
    }

  secondLevelMenuVisibilityToggle(index) {
    if (index == this.activeSecondLevelMenu) {
      return this.activeSecondLevelMenu = -1;
    } else {
      return this.activeSecondLevelMenu = index;
    }
  }

  thirdLevelMenuVisibilityStyling(index) {
    if (index !== this.activeThirdLevelMenu) {
      return {'max-height': '0'};
    } else {
      const maxHeight = (
        document.getElementsByClassName('second-level-item')[index]
        .getElementsByClassName('third-level-menu')[0].children.length * 45) + 'px';
        return {'max-height': maxHeight};
      }
    }

  thirdLevelMenuVisibilityToggle(index) {
    if (index === this.activeThirdLevelMenu) {
      this.activeThirdLevelMenu = -1;
    } else {
      this.activeThirdLevelMenu = index;
    }
  }
}
