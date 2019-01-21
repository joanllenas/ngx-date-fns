import { Pipe, PipeTransform } from '@angular/core';
import { endOfYesterday } from 'date-fns';

@Pipe({ name: 'dfnsEndOfYesterday' })
export class EndOfYesterdayPipe implements PipeTransform {
  transform(): Date {
    return endOfYesterday();
  }
}
