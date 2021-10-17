import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isThisWeek from 'date-fns/isThisWeek';

@Pipe({
  name: 'dfnsIsThisWeek'
})
export class IsThisWeekPipe implements PipeTransform {

  transform(date: DateFnsInputDate): boolean {
    return isThisWeek(date);
  }

}

@NgModule({
  declarations: [IsThisWeekPipe],
  exports: [IsThisWeekPipe]
})
export class IsThisWeekPipeModule { }
