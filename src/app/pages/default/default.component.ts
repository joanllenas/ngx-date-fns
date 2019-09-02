import { Component } from '@angular/core';
import { DateFnsConfigurationService } from '../../../../projects/ngx-date-fns/src/lib/date-fns-configuration.service';
import { es, de } from 'date-fns/locale';

@Component({
  selector: 'default-component',
  template: `
    <h2>Default</h2>
    <p>Set default locale to:</p>
    <ul>
      <li><button type="button" (click)="changeToGerman()">German</button></li>
      <li>
        <button type="button" (click)="changeToSpanish()">Spanish</button>
      </li>
    </ul>
    <hr />
    <test-default-component
      [dateOne]="dateOne"
      [dateTwo]="dateTwo"
      [dateThree]="dateThree"
      [dates]="dates"
    >
    </test-default-component>
  `
})
export class StrategyDefaultComponent {
  dateOne = new Date(2016, 0, 1);
  dateTwo = new Date(2017, 0, 1);
  dateThree: Date;
  dates: Date[];

  constructor(public config: DateFnsConfigurationService) {
    this.dateThree = new Date();
    this.dateThree.setDate(this.dateThree.getDate() - 6);
    this.dates = new Array(6)
      .fill(new Date())
      .map((d, i) => d.setDate(d.getDate() - Math.pow(5, i)));
  }
  changeToGerman() {
    this.config.setLocale(de);
  }
  changeToSpanish() {
    this.config.setLocale(es);
  }
}
