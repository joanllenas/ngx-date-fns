import { Component } from "@angular/core";
import * as esLocale from "date-fns/locale/es/index.js";
import * as deLocale from "date-fns/locale/de/index.js";
import { DateFnsConfigurationService } from "../../../lib/src/date-fns-configuration.service";

@Component({
  selector: "onpush-component",
  template: `
    <p>Set default locale to:</p>
    <ul>
      <li><button type="button" (click)="changeToGerman()">German</button></li>
      <li><button type="button" (click)="changeToSpanish()">Spanish</button></li>
    </ul>
    <hr>
    <test-onpush-component
      [dateOne]="dateOne"
      [dateTwo]="dateTwo"
      [dateThree]="dateThree"
      [dates]="dates"
    >
    </test-onpush-component>
  `
})
export class StrategyOnPushComponent {
  dateOne = new Date(2016, 0, 1);
  dateTwo = new Date(2017, 0, 1);
  dateThree: Date;
  dates: Date[];

  constructor(public config: DateFnsConfigurationService) {
    this.dateThree = new Date();
    this.dateThree.setDate(-6);
    this.dates = new Array(6)
      .fill(new Date())
      .map((d, i) => d.setDate(d.getDate() - Math.pow(5, i) ));
  }
  changeToGerman() {
    this.config.setLocale(deLocale);
  }
  changeToSpanish() {
    this.config.setLocale(esLocale);
  }
}
