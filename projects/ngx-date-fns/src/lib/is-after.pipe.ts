import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isAfter } from 'date-fns/isAfter';

@Pipe({ name: 'dfnsIsAfter', standalone: true })
export class IsAfterPipe implements PipeTransform {
  transform(date: DateFnsInputDate, dateToCompare: DateFnsInputDate): boolean {
    return isAfter(date, dateToCompare);
  }
}

/**
 * @deprecated Import the standalone `IsAfterPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsAfterPipe],
  exports: [IsAfterPipe]
})
export class IsAfterPipeModule {}
