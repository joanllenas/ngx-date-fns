import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isSameYear from 'date-fns/isSameYear';

@Pipe({ name: 'dfnsIsSameYear' })
export class IsSameYearPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameYear(dateLeft, dateRight);
  }
}
