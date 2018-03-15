import { Component } from '@angular/core';
import * as esLocale from 'date-fns/locale/es/index.js';

@Component({
  selector: 'app-root',
  template: `
    <p>
      {{ dateOne | dfnsFormat : 'YYYY/MM/DD' }}
    </p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMin }}
    </p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMax | dfnsFormat : 'YYYY/MM/DD' }}
    </p>
    <p>
      {{ dateThree | dfnsDistanceInWordsToNow : options }}
    </p>
  `
})
export class AppComponent {
  dateOne = new Date(2016, 0, 1);
  dateTwo = new Date(2017, 0, 1);
  dateThree;
  options = {
    locale: esLocale
  }
  constructor() {
    this.dateThree = new Date();
    this.dateThree.setDate(-6);
  }
}
