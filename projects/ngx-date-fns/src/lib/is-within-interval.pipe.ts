import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Interval } from 'date-fns';
import { DateFnsInputDate } from './types';
import { isWithinInterval } from 'date-fns/isWithinInterval';

@Pipe({
  name: 'dfnsIsWithinInterval',
  standalone: true
})
export class IsWithinIntervalPipe implements PipeTransform {
  transform(date: DateFnsInputDate, interval: Interval): boolean {
    return isWithinInterval(date, interval);
  }
}

/**
 * @deprecated Import the standalone `IsWithinIntervalPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsWithinIntervalPipe],
  exports: [IsWithinIntervalPipe]
})
export class IsWithinIntervalPipeModule {}
