import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isThisISOWeek from 'date-fns/isThisISOWeek';

@Pipe({
  name: 'dfnsIsThisISOWeek'
})
export class IsThisISOWeekPipe implements PipeTransform {

  transform(date: DateFnsInputDate): boolean {
    return isThisISOWeek(date);
  }

}

@NgModule({
  declarations: [IsThisISOWeekPipe],
  exports: [IsThisISOWeekPipe]
})
export class IsThisISOWeekPipeModule { }
