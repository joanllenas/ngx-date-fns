import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isEqual from 'date-fns/isEqual';

@Pipe({ name: 'dfnsIsEqual' })
export class IsEqualPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isEqual(dateLeft, dateRight);
  }
}
