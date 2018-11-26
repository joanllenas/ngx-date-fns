import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="main">
      <div class="sidebar">
        <ul>
          <li><a [routerLink]="['main']" routerLinkActive="active">Main</a></li>
          <li><a [routerLink]="['strategy-on-push']" routerLinkActive="active">On Push</a></li>
          <li><a [routerLink]="['strategy-default']" routerLinkActive="active">Default</a></li>
        </ul>
      </div>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
}
