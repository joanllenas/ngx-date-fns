import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isYesterday } from 'date-fns/isYesterday';

@Pipe({
  name: 'dfnsIsYesterday'
})
export class IsYesterdayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isYesterday(date);
  }
}
