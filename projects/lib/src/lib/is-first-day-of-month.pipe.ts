import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isFirstDayOfMonth from 'date-fns/isFirstDayOfMonth';

@Pipe({
  name: 'dfnsIsFirstDayOfMonth'
})
export class IsFirstDayOfMonthPipe implements PipeTransform {

  transform(date: DateFnsInputDate): boolean {
    return isFirstDayOfMonth(date);
  }

}

@NgModule({
  declarations: [IsFirstDayOfMonthPipe],
  exports: [IsFirstDayOfMonthPipe]
})
export class IsFirstDayOfMonthPipeModule { }
