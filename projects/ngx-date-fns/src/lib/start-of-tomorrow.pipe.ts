import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { startOfTomorrow } from 'date-fns';

@Pipe({ name: 'dfnsStartOfTomorrow' })
export class StartOfTomorrowPipe implements PipeTransform {
  transform(): Date {
    return startOfTomorrow();
  }
}
