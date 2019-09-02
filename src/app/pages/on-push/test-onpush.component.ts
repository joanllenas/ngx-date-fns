import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { es } from 'date-fns/locale';

@Component({
  selector: 'test-onpush-component',
  template: `
    <p>
      {{ dateOne | dfnsFormat: 'MM/dd/yyyy' }}
    </p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMin | dfnsFormat: 'EEE LLLL d yyyy' }}
    </p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMax | dfnsFormat: 'EEE LLLL d yyyy' }}
    </p>
    <p>
      {{ dateThree | dfnsFormatDistanceToNow: options }} - (Explicit 'es'
      locale)
    </p>
    <ul>
      <li *ngFor="let d of dates">
        {{ d | dfnsFormatDistanceToNow }}
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestOnPushComponent {
  @Input() dateOne = new Date();
  @Input() dateTwo = new Date();
  @Input() dateThree = new Date();
  @Input() dates: Date[] = [];
  options = {
    locale: es,
    addSuffix: true
  };
}
