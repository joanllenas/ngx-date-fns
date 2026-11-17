import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSameQuarter } from 'date-fns/isSameQuarter';

@Pipe({
  name: 'dfnsIsSameQuarter'
})
export class IsSameQuarterPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameQuarter(dateLeft, dateRight);
  }
}
