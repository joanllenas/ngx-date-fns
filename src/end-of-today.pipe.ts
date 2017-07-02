import {Pipe, PipeTransform} from '@angular/core';
import * as endOfToday from 'date-fns/end_of_today';

@Pipe({ name: 'dfnsEndOfToday' })
export class EndOfTodayPipe implements PipeTransform {

  transform(): Date {
    return endOfToday();
  }
}
