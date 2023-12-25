import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isLastDayOfMonth } from 'date-fns/isLastDayOfMonth';

@Pipe({
  name: 'dfnsIsLastDayOfMonth'
})
export class IsLastDayOfMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isLastDayOfMonth(date);
  }
}

@NgModule({
  declarations: [IsLastDayOfMonthPipe],
  exports: [IsLastDayOfMonthPipe]
})
export class IsLastDayOfMonthPipeModule {}
