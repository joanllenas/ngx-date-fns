import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isYesterday } from 'date-fns/isYesterday';

@Pipe({
  name: 'dfnsIsYesterday',
  standalone: true
})
export class IsYesterdayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isYesterday(date);
  }
}

/**
 * @deprecated Import the standalone `IsYesterdayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsYesterdayPipe],
  exports: [IsYesterdayPipe]
})
export class IsYesterdayPipeModule {}
