// Root component of the app that smoke-test/run.sh generates.
// It uses the two ways to import pipes: standalone pipe classes and
// DateFnsModule.
import { Component, inject } from '@angular/core';
import { es } from 'date-fns/locale';
import {
  AddDaysPipe,
  DateFnsConfigurationService,
  DateFnsModule,
  FormatPipe,
  FormatPurePipe
} from 'ngx-date-fns';

@Component({
  selector: 'app-root',
  imports: [AddDaysPipe, FormatPipe, FormatPurePipe, DateFnsModule],
  template: `
    <p id="standalone-impure">{{ date | dfnsFormat: 'EEEE d MMMM yyyy' }}</p>
    <p id="standalone-pure">
      {{ date | dfnsAddDays: 3 | dfnsFormatPure: 'yyyy-MM-dd' }}
    </p>
    <p id="string-input">
      {{ '2026-01-15T10:00:00Z' | dfnsFormat: 'MMM yyyy' }}
    </p>
    <p id="date-fns-module">{{ date | dfnsFormatDistance: otherDate }}</p>
  `
})
export class App {
  date = new Date(2026, 10, 15);
  otherDate = new Date(2026, 10, 1);

  constructor() {
    inject(DateFnsConfigurationService).setLocale(es);
  }
}
