import {Pipe, PipeTransform} from '@angular/core';
import * as startOfTomorrow from 'date-fns/start_of_tomorrow';

@Pipe({ name: 'dfnsStartOfTomorrow' })
export class StartOfTomorrowPipe implements PipeTransform {

  transform(): Date {
    return startOfTomorrow();
  }
}
