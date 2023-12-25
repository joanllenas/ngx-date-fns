import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Interval } from 'date-fns';
import { DateFnsInputDate } from './types';
import { isWithinInterval } from 'date-fns/isWithinInterval';

@Pipe({
  name: 'dfnsIsWithinInterval'
})
export class IsWithinIntervalPipe implements PipeTransform {
  transform(date: DateFnsInputDate, interval: Interval): boolean {
    return isWithinInterval(date, interval);
  }
}

@NgModule({
  declarations: [IsWithinIntervalPipe],
  exports: [IsWithinIntervalPipe]
})
export class IsWithinIntervalPipeModule {}
