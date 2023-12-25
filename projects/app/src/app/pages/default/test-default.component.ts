import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { es } from 'date-fns/locale';
import { DateFnsModule } from 'ngx-date-fns';

@Component({
  selector: 'dfns-test-default-component',
  standalone: true,
  imports: [CommonModule, DateFnsModule],
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
