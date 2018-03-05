import {Pipe, PipeTransform} from '@angular/core';
import * as startOfTomorrowNs from 'date-fns/start_of_tomorrow';
const startOfTomorrow = startOfTomorrowNs;

@Pipe({ name: 'dfnsStartOfTomorrow' })
export class StartOfTomorrowPipe implements PipeTransform {

  transform(): Date {
    return startOfTomorrow();
  }
}
