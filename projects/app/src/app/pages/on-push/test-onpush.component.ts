import { AsyncPipe } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { es } from 'date-fns/locale';
import { DateFnsModule } from 'ngx-date-fns';
import { of } from 'rxjs';

@Component({
  selector: 'dfns-test-onpush-component',
  imports: [AsyncPipe, DateFnsModule],
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
      @for (d of dates; track d; let i = $index) {
        <li class="output" [attr.data-testid]="'distance-now-' + i">
          {{ d | dfnsFormatDistanceToNow }}
        </li>
      }
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
