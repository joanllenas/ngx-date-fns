import { Component, Input } from '@angular/core';
import es from 'date-fns/esm/locale/es';

@Component({
  selector: 'dfns-test-default-component',
  template: `
    <p>{{ dateOne | dfnsFormat: 'MM/dd/yyyy' }}</p>
    <p>{{ [dateOne, dateTwo] | dfnsMin | dfnsFormat: 'EEE LLLL d yyyy' }}</p>
    <p>{{ [dateOne, dateTwo] | dfnsMax | dfnsFormat: 'EEE LLLL d yyyy' }}</p>
    <p>
      {{ dateThree | dfnsFormatDistanceToNow: options }} - (Explicit 'es'
      locale)
    </p>
    <ul>
      <li *ngFor="let d of dates">{{ d | dfnsFormatDistanceToNow }}</li>
    </ul>
  `
})
export class TestStrategyDefaultComponent {
  @Input() dateOne: Date = new Date();
  @Input() dateTwo: Date = new Date();
  @Input() dateThree: Date = new Date();
  @Input() dates: Date[] = [];
  options = {
    locale: es,
    addSuffix: true
  };
}
