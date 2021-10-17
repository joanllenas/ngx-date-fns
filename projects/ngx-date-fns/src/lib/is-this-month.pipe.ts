import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isThisMonth from 'date-fns/isThisMonth';

@Pipe({
  name: 'dfnsIsThisMonth'
})
export class IsThisMonthPipe implements PipeTransform {

  transform(date: DateFnsInputDate): boolean {
    return isThisMonth(date);
  }

}

@NgModule({
  declarations: [IsThisMonthPipe],
  exports: [IsThisMonthPipe]
})
export class IsThisMonthPipeModule { }
