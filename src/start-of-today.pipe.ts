import {Pipe, PipeTransform} from '@angular/core';
import * as startOfToday from 'date-fns/start_of_today';

@Pipe({ name: 'dfnsStartOfToday' })
export class StartOfTodayPipe implements PipeTransform {

  transform(): Date {
    return startOfToday();
  }
}
