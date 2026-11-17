import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSameISOWeekYear } from 'date-fns/isSameISOWeekYear';

@Pipe({
  name: 'dfnsIsSameISOWeekYear'
})
export class IsSameISOWeekYearPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameISOWeekYear(dateLeft, dateRight);
  }
}
