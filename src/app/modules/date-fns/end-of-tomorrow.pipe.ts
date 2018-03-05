import {Pipe, PipeTransform} from '@angular/core';
import * as endOfTomorrowNs from 'date-fns/end_of_tomorrow';
const endOfTomorrow = endOfTomorrowNs;

@Pipe({ name: 'dfnsEndOfTomorrow' })
export class EndOfTomorrowPipe implements PipeTransform {

  transform(): Date {
    return endOfTomorrow();
  }
}
