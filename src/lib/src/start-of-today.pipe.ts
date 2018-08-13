import { Pipe, PipeTransform } from '@angular/core';
import { startOfDay } from 'date-fns';

@Pipe({ name: 'dfnsStartOfToday' })
export class StartOfTodayPipe implements PipeTransform {
  transform(): Date {
    return startOfDay(new Date());
  }
}
