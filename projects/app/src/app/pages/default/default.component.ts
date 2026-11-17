import { Component } from '@angular/core';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { subDays } from 'date-fns';
import { es, de, fr } from 'date-fns/locale';
import { TestStrategyDefaultComponent } from './test-default.component';

@Component({
  selector: 'dfns-default-component',
  imports: [TestStrategyDefaultComponent],
  styles: `
    .locale-toggle {
      display: flex;
    }
    button.active {
      border-color: blue;
    }
  `,
  template: `
    <h2>Default</h2>
    <p>Set default locale to:</p>
    <div class="locale-toggle">
      <button
        type="button"
        data-testid="fr"
        [class.active]="activeLocale === 'fr'"
        (click)="changeToFrench()"
      >
        French
      </button>

      <button
        type="button"
        data-testid="de"
        [class.active]="activeLocale === 'de'"
        (click)="changeToGerman()"
      >
        German
      </button>

      <button
        type="button"
        data-testid="es"
        [class.active]="activeLocale === 'es'"
        (click)="changeToSpanish()"
      >
        Spanish
      </button>
    </div>

    <hr />
    <dfns-test-default-component
      [dateOne]="dateOne"
      [dateTwo]="dateTwo"
      [dateThree]="dateThree"
      [dates]="dates"
    >
    </dfns-test-default-component>
  `
})
export class StrategyDefaultComponent {
  // A date-time string without an offset is local time in every time zone.
  dateOne = '2016-01-01T00:00:00';
  dateTwo = new Date(2017, 0, 1);
  dateThree: Date;
  dates: Date[];
  activeLocale?: string;

  constructor(public config: DateFnsConfigurationService) {
    this.dateThree = new Date();
    this.dateThree.setDate(this.dateThree.getDate() - 6);
    // Each distance gives a different output: days, about 1 month, months,
    // about 2 years and over 10 years.
    this.dates = [1, 6, 31, 156, 781, 3906].map(days =>
      subDays(new Date(), days)
    );
    this.activeLocale = this.config.locale()?.code;
  }
  changeToFrench() {
    this.config.setLocale(fr);
    this.activeLocale = 'fr';
  }
  changeToGerman() {
    this.config.setLocale(de);
    this.activeLocale = 'de';
  }
  changeToSpanish() {
    this.config.setLocale(es);
    this.activeLocale = 'es';
  }
}
