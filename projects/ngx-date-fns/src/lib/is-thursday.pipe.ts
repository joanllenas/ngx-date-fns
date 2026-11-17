import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isThursday } from 'date-fns/isThursday';

@Pipe({
  name: 'dfnsIsThursday'
})
export class IsThursdayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isThursday(date);
  }
}
