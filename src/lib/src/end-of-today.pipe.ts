import {Pipe, PipeTransform} from '@angular/core';
import {endOfToday} from 'date-fns';


@Pipe({ name: 'dfnsEndOfToday' })
export class EndOfTodayPipe implements PipeTransform {

  transform(): Date {
    return endOfToday();
  }
}
