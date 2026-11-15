import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { startOfMinute } from 'date-fns/startOfMinute';

@Pipe({ name: 'dfnsStartOfMinute', standalone: true })
export class StartOfMinutePipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfMinute(date);
  }
}

/**
 * @deprecated Import the standalone `StartOfMinutePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [StartOfMinutePipe],
  exports: [StartOfMinutePipe]
})
export class StartOfMinutePipeModule {}
