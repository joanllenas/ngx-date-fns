import { Pipe, PipeTransform } from '@angular/core';
import { endOfDay, subDays } from 'date-fns';

@Pipe({ name: 'dfnsEndOfYesterday' })
export class EndOfYesterdayPipe implements PipeTransform {
  transform(): Date {
    return endOfDay(subDays(new Date(), 1));
  }
}
