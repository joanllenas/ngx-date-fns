import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import startOfTomorrow from 'date-fns/startOfTomorrow';

@Pipe({ name: 'dfnsStartOfTomorrow' })
export class StartOfTomorrowPipe implements PipeTransform {
  transform(): Date {
    return startOfTomorrow();
  }
}
