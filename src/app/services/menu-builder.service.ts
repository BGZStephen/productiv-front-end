import { Injectable } from '@angular/core';

@Injectable()
export class MenuBuilderService {

  menu: Array<object> = [];

  constructor() { }

  buildNavbar() {
    this.addDefaults();
    this.addLogout();
    return this.menu;
  }

  addDefaults() {
    const homeNavItem = {
      icon: 'fa-home',
      route: '/dashboard/home',
      hasSubmenu: false,
      title: 'Home',
      submenu: [],
    };

    const modulesNavItem = {
      icon: 'fa-microchip',
      route: null,
      hasSubmenu: true,
      title: 'Modules',
      submenu: [
        {
          icon: 'fa-cogs',
          route: '/dashboard/modules/manage',
          title: 'Manage',
        },
        {
          icon: 'fa-plus',
          route: '/dashboard/modules/add',
          title: 'Add',
        },
      ],
    };

    this.menu.push(homeNavItem, modulesNavItem);
    return;
  }

  addLogout() {
    const logoutNavItem = {
      icon: 'fa-power-off',
      route: null,
      hasSubmenu: false,
      title: 'Logout',
      submenu: [],
    };

    this.menu.push(logoutNavItem);
    return;
  }
}
