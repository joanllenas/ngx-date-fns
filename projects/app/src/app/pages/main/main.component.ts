import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { es } from 'date-fns/locale';
import { DateFnsModule } from 'ngx-date-fns';

@Component({
  selector: 'dfns-main-component',
  standalone: true,
  imports: [CommonModule, DateFnsModule],
  template: `
    <h2>Main</h2>
    <p data-testid="mmddyyyy">
      {{ dateOne | dfnsFormat: 'MM/dd/yyyy' }}
    </p>
    <p data-testid="dfns-min">
      {{ [dateOne, dateTwo] | dfnsMin | dfnsFormat: 'MM/dd/yyyy' }}
    </p>
    <p data-testid="dfns-max">
      {{ [dateOne, dateTwo] | dfnsMax | dfnsFormat: 'EEE LLLL d yyyy' }}
    </p>
    <p data-testid="distance-es">
      {{ dateThree | dfnsFormatDistanceToNow: options }} - (Explicit 'es'
      locale)
    </p>
    <p data-testid="weekday-es">
      {{ 0 | dfnsWeekdayName: 'full':options }} - (Explicit 'es' locale)
    </p>
    <p data-testid="parse-es">
      {{
        '12 de Marzo'
          | dfnsParse: parseFormat:parseDate:parseLocale
          | dfnsFormat: 'MM/dd/yyyy'
      }}
    </p>
  `
})
export class MainComponent {
  dateOne = new Date(2016, 0, 1);
  dateTwo = new Date(2017, 0, 1);
  dateThree: Date;
  options = {
    locale: es,
    addSuffix: true
  };
  parseDate = new Date(2010, 0, 1);
  parseFormat = `do 'de' MMMM`;
  parseLocale = { locale: es };

  constructor() {
    this.dateThree = new Date();
    this.dateThree.setDate(this.dateThree.getDate() - 6);
  }
}
