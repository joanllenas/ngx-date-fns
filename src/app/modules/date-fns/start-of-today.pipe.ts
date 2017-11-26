import {Pipe, PipeTransform} from '@angular/core';
import * as startOfTodayNs from 'date-fns/start_of_today';
const startOfToday = startOfTodayNs;

@Pipe({ name: 'dfnsStartOfToday' })
export class StartOfTodayPipe implements PipeTransform {

  transform(): Date {
    return startOfToday();
  }
}
