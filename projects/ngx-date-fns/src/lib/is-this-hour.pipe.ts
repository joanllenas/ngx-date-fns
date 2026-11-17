import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isThisHour } from 'date-fns/isThisHour';

@Pipe({
  name: 'dfnsIsThisHour'
})
export class IsThisHourPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isThisHour(date);
  }
}
