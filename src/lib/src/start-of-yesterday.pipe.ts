import { Pipe, PipeTransform } from '@angular/core';
import { startOfDay, subDays } from 'date-fns';

@Pipe({ name: 'dfnsStartOfYesterday' })
export class StartOfYesterdayPipe implements PipeTransform {
  transform(): Date {
    return startOfDay(subDays(new Date(), 1));
  }
}
