import { Injectable } from '@angular/core';

@Injectable()
export class MenuBuilderService {

  menu: Array<object> = [];

  constructor() { }

  buildNavbar() {
    this.menu = []
    this.addDefaults();
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

    const settingsNavItem = {
      hasSubmenu: true,
      icon: 'fa-cogs',
      route: null,
      title: 'Settings',
      submenu: [
        {
          hasSubmenu: true,
          icon: 'fa-microchip',
          route: null,
          title: 'Modules',
          submenu: [
            {
              hasSubmenu: false,
              icon: 'fa-cogs',
              route: '/dashboard/modules/manage',
              title: 'Manage',
              submenu: [],
            },
            {
              hasSubmenu: false,
              icon: 'fa-plus',
              route: '/dashboard/modules/add',
              title: 'Add',
              submenu: [],
            },
          ],
        },
        {
          hasSubmenu: false,
          icon: 'fa-user',
          route: 'profile',
          title: 'Profile',
        },
      ],
    };

    this.menu.push(homeNavItem, settingsNavItem);
    return;
  }
}
