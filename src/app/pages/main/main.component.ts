import { Component } from '@angular/core';
import * as esLocale from 'date-fns/locale/es/index.js';

@Component({
  selector: 'main-component',
  template: `
    <h2>Main</h2>
    <p>
      {{ dateOne | dfnsFormat: 'YYYY/MM/DD' }}
    </p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMin | dfnsFormat: 'ddd MMM D YYYY' }}
    </p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMax | dfnsFormat: 'ddd MMM D YYYY' }}
    </p>
    <p>
      {{ dateThree | dfnsDistanceInWordsToNow: options }} - (Explicit 'es'
      locale)
    </p>
  `
})
export class MainComponent {
  dateOne = new Date(2016, 0, 1);
  dateTwo = new Date(2017, 0, 1);
  dateThree: Date;
  options = {
    locale: esLocale
  };
  constructor() {
    this.dateThree = new Date();
    this.dateThree.setDate(-6);
  }
}
