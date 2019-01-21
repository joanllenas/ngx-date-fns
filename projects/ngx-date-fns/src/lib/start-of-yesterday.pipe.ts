import { Pipe, PipeTransform } from '@angular/core';
import { startOfYesterday } from 'date-fns';

@Pipe({ name: 'dfnsStartOfYesterday' })
export class StartOfYesterdayPipe implements PipeTransform {
  transform(): Date {
    return startOfYesterday();
  }
}
