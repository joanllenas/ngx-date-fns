import { Pipe, PipeTransform } from '@angular/core';
import { endOfDay } from 'date-fns';

@Pipe({ name: 'dfnsEndOfToday' })
export class EndOfTodayPipe implements PipeTransform {
  transform(): Date {
    return endOfDay(new Date());
  }
}
