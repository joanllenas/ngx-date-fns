import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isFriday } from 'date-fns/isFriday';

@Pipe({
  name: 'dfnsIsFriday'
})
export class IsFridayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isFriday(date);
  }
}
