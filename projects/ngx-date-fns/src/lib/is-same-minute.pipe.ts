import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSameMinute } from 'date-fns/isSameMinute';

@Pipe({
  name: 'dfnsIsSameMinute'
})
export class IsSameMinutePipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameMinute(dateLeft, dateRight);
  }
}
