import { Component } from '@angular/core';

interface Nav {
  path: string;
  name: string;
  exact: boolean;
}
@Component({
  selector: 'app-root',
  template: `<div>
    <nav class="nav">
      <a
        *ngFor="let item of navs"
        [routerLink]="item.path"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: item.exact }"
        >{{ item.name }}</a
      >
    </nav>
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navs: Nav[] = [
    {
      path: '/',
      name: 'Home',
      exact: true,
    },
    {
      path: '/passengers',
      name: 'Passengers',
      exact: true,
    },
    {
      path: '/404',
      name: '404',
      exact: true,
    },
  ];
}
