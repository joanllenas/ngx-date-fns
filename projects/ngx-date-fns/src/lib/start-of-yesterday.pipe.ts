import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import startOfYesterday from 'date-fns/startOfYesterday';

@Pipe({ name: 'dfnsStartOfYesterday' })
export class StartOfYesterdayPipe implements PipeTransform {
  transform(): Date {
    return startOfYesterday();
  }
}
