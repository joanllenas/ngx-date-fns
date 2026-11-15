import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { lastDayOfDecade } from 'date-fns/lastDayOfDecade';

@Pipe({ name: 'dfnsLastDayOfDecade', standalone: true })
export class LastDayOfDecadePipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return lastDayOfDecade(date);
  }
}

/**
 * @deprecated Import the standalone `LastDayOfDecadePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [LastDayOfDecadePipe],
  exports: [LastDayOfDecadePipe]
})
export class LastDayOfDecadePipeModule {}
