import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { es } from 'date-fns/locale';
import { DateFnsModule } from 'ngx-date-fns';
import { of } from 'rxjs';

@Component({
  selector: 'dfns-test-onpush-component',
  standalone: true,
  imports: [CommonModule, DateFnsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="output" data-testid="mmddyyyy">
      {{ dateOne | dfnsFormat: 'MM/dd/yyyy' }}
    </p>
    <p class="output" data-testid="dfns-min">
      {{ [dateOne, dateTwo] | dfnsMin | dfnsFormat: 'EEE LLLL d yyyy' }}
    </p>
    <p class="output" data-testid="dfns-max">
      {{ [dateOne, dateTwo] | dfnsMax | dfnsFormat: 'EEE LLLL d yyyy' }}
    </p>
    <p class="output" data-testid="format-es">
      {{ dateThree | async | dfnsFormatDistanceToNow: options }} - (Explicit
      'es' locale)
    </p>
    <ul>
      <li
        class="output"
        [attr.data-testid]="'distance-now-' + i"
        *ngFor="let d of dates; let i = index"
      >
        {{ d | dfnsFormatDistanceToNow }}
      </li>
    </ul>
  `
})
export class TestOnPushComponent {
  @Input() dateOne = new Date();
  @Input() dateTwo = new Date();
  @Input() dateThree = of(new Date());
  @Input() dates: Date[] = [];
  options = {
    locale: es,
    addSuffix: true
  };
}
