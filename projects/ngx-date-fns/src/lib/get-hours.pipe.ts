import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getHours from 'date-fns/getHours';

@Pipe({ name: 'dfnsGetHours' })
export class GetHoursPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getHours(date);
  }
}
