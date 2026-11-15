import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isBefore } from 'date-fns/isBefore';

@Pipe({ name: 'dfnsIsBefore', standalone: true })
export class IsBeforePipe implements PipeTransform {
  transform(date: DateFnsInputDate, dateToCompare: DateFnsInputDate): boolean {
    return isBefore(date, dateToCompare);
  }
}

/**
 * @deprecated Import the standalone `IsBeforePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsBeforePipe],
  exports: [IsBeforePipe]
})
export class IsBeforePipeModule {}
