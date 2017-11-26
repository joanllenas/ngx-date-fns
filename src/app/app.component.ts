import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  now = new Date();
  today = new Date();
  tomorrow = new Date();
  yesterday = new Date();
  threeDaysAgo = new Date();

  constructor() {
    this.yesterday.setDate(this.today.getDate() - 1);
    this.tomorrow.setDate(this.today.getDate() + 1);
    this.threeDaysAgo.setDate(this.today.getDate() - 3);
    setInterval(() => this.now = new Date(), 500);
  }
}
