import { Pipe, PipeTransform } from '@angular/core';
import { endOfDay, addDays } from 'date-fns';

@Pipe({ name: 'dfnsEndOfTomorrow' })
export class EndOfTomorrowPipe implements PipeTransform {
  transform(): Date {
    return endOfDay(addDays(new Date(), 1));
  }
}
