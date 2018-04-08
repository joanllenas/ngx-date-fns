import { Component } from "@angular/core";
import * as esLocale from "date-fns/locale/es/index.js";
import * as deLocale from "date-fns/locale/de/index.js";
import { DateFnsConfigurationService } from "../lib/src/date-fns-configuration.service";

@Component({
  selector: "app-root",
  template: `
    <p>
      {{ dateOne | dfnsFormat : 'YYYY/MM/DD' }}
    </p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMin | dfnsFormat : 'ddd MMM D YYYY' }}
    </p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMax | dfnsFormat : 'ddd MMM D YYYY' }}
    </p>
    <p>
      {{ dateThree | dfnsDistanceInWordsToNow : options }} - (Explicit 'es' locale)
    </p>
    <hr>
    Set default locale to: <a href="#" (click)="changeToGerman()">German</a>, <a href="#" (click)="changeToSpanish()">Spanish</a>.
    <p *ngFor="let d of dates">
      {{ d | dfnsDistanceInWordsToNow }}
    </p>
  `
})
export class AppComponent {
  dateOne = new Date(2016, 0, 1);
  dateTwo = new Date(2017, 0, 1);
  dateThree: Date;
  dates: Date[];
  options = {
    locale: esLocale
  };
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
