import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isThisYear } from 'date-fns/isThisYear';

@Pipe({
  name: 'dfnsIsThisYear'
})
export class IsThisYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isThisYear(date);
  }
}
