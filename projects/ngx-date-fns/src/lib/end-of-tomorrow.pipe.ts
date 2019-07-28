import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { endOfTomorrow } from 'date-fns';

@Pipe({ name: 'dfnsEndOfTomorrow' })
export class EndOfTomorrowPipe implements PipeTransform {
  transform(): Date {
    return endOfTomorrow();
  }
}
