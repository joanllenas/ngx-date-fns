import {Pipe, PipeTransform} from '@angular/core';
import * as endOfTomorrow from 'date-fns/end_of_tomorrow';

@Pipe({ name: 'dfnsEndOfTomorrow' })
export class EndOfTomorrowPipe implements PipeTransform {

  transform(): Date {
    return endOfTomorrow();
  }
}
