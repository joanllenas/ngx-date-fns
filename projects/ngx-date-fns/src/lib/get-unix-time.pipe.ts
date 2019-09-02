import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getUnixTime from 'date-fns/getUnixTime';

@Pipe({ name: 'dfnsGetUnixTime' })
export class GetUnixTimePipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getUnixTime(date);
  }
}
