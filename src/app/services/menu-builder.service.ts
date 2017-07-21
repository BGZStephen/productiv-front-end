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
      component: 'home',
      hasSubmenu: false,
      title: 'Home',
      submenu: [],
    };

    const modulesNavItem = {
      icon: 'fa-microchip',
      component: '',
      hasSubmenu: true,
      title: 'Modules',
      submenu: [
        {
          icon: 'fa-plus',
          component: 'modules-add',
          title: 'Add',
        },
        {
          icon: 'fa-cogs',
          component: 'modules-manage',
          title: 'Manage',
        },
      ],
    };

    this.menu.push(homeNavItem, modulesNavItem);
    return;
  }

  addLogout() {
    const logoutNavItem = {
      icon: 'fa-power-off',
      component: null,
      hasSubmenu: false,
      title: 'Logout',
      submenu: [],
    };

    this.menu.push(logoutNavItem);
    return;
  }
}
