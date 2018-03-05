import {Pipe, PipeTransform} from '@angular/core';
import * as endOfTodayNs from 'date-fns/end_of_today';
const endOfToday = endOfTodayNs;

@Pipe({ name: 'dfnsEndOfToday' })
export class EndOfTodayPipe implements PipeTransform {

  transform(): Date {
    return endOfToday();
  }
}
