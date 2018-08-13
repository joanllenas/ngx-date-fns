import { Pipe, PipeTransform } from '@angular/core';
import { startOfDay, addDays } from 'date-fns';

@Pipe({ name: 'dfnsStartOfTomorrow' })
export class StartOfTomorrowPipe implements PipeTransform {
  transform(): Date {
    return startOfDay(addDays(new Date(), 1));
  }
}
