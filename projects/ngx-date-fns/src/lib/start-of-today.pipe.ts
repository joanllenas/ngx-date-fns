import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { startOfToday } from 'date-fns';

@Pipe({ name: 'dfnsStartOfToday' })
export class StartOfTodayPipe implements PipeTransform {
  transform(): Date {
    return startOfToday();
  }
}
