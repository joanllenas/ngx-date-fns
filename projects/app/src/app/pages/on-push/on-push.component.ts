import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { es, de, fr } from 'date-fns/locale';
import { TestOnPushComponent } from './test-onpush.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'dfns-onpush-component',
  standalone: true,
  imports: [CommonModule, TestOnPushComponent],
  styles: `
    .locale-toggle {
      display: flex;
    }
    button.active {
      border-color: blue;
    }
  `,
  template: `
    <h2>On Push</h2>
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
    <dfns-test-onpush-component
      [dateOne]="dateOne"
      [dateTwo]="dateTwo"
      [dateThree]="dateThree$"
      [dates]="dates"
    >
    </dfns-test-onpush-component>
  `
})
export class StrategyOnPushComponent {
  dateOne = new Date(2016, 0, 1);
  dateTwo = new Date(2017, 0, 1);
  dateThree$: Observable<Date>;
  dates: Date[];
  activeLocale?: string;

  constructor(public config: DateFnsConfigurationService) {
    const dateThree = new Date();
    dateThree.setDate(dateThree.getDate() - 6);
    this.dateThree$ = of(dateThree);
    this.dates = new Array(6)
      .fill(new Date())
      .map((d, i) => d.setDate(d.getDate() - Math.pow(5, i)));
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
