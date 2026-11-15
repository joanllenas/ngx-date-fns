import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { endOfMinute } from 'date-fns/endOfMinute';

@Pipe({ name: 'dfnsEndOfMinute', standalone: true })
export class EndOfMinutePipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfMinute(date);
  }
}

/**
 * @deprecated Import the standalone `EndOfMinutePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [EndOfMinutePipe],
  exports: [EndOfMinutePipe]
})
export class EndOfMinutePipeModule {}
