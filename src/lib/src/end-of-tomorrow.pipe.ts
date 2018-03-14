import {Pipe, PipeTransform} from '@angular/core';
import {endOfTomorrow} from 'date-fns';


@Pipe({ name: 'dfnsEndOfTomorrow' })
export class EndOfTomorrowPipe implements PipeTransform {

  transform(): Date {
    return endOfTomorrow();
  }
}
