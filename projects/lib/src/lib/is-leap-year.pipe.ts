import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isLeapYear from 'date-fns/isLeapYear';

@Pipe({
  name: 'dfnsIsLeapYear'
})
export class IsLeapYearPipe implements PipeTransform {

  transform(date: DateFnsInputDate): boolean {
    return isLeapYear(date);
  }
}

@NgModule({
  declarations: [IsLeapYearPipe],
  exports: [IsLeapYearPipe]
})
export class IsLeapYearPipeModule { }
