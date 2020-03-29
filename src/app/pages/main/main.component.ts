import { Component } from '@angular/core';
import { es } from 'date-fns/locale';

@Component({
  selector: 'dfns-main-component',
  template: `
    <h2>Main</h2>
    <p>
      {{ dateOne | dfnsFormat: 'MM/dd/yyyy' }}
    </p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMin }}
    </p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMax | dfnsFormat: 'EEE LLLL d yyyy' }}
    </p>
    <p>
      {{ dateThree | dfnsFormatDistanceToNow: options }} - (Explicit 'es'
      locale)
    </p>
    <p>{{ 0 | dfnsWeekdayName: 'full':options }} - (Explicit 'es' locale)</p>
    <p>
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
