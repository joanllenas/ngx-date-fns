import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { es } from 'date-fns/locale';
import { DateFnsInputDate, DateFnsModule } from 'ngx-date-fns';

@Component({
  selector: 'dfns-test-default-component',
  standalone: true,
  imports: [CommonModule, DateFnsModule],
  changeDetection: ChangeDetectionStrategy.Default,
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
      {{ dateThree | dfnsFormatDistanceToNow: options }} - (Explicit 'es'
      locale)
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
export class TestStrategyDefaultComponent {
  @Input() dateOne: DateFnsInputDate = '';
  @Input() dateTwo: Date = new Date();
  @Input() dateThree: Date = new Date();
  @Input() dates: Date[] = [];
  options = {
    locale: es,
    addSuffix: true
  };
}
