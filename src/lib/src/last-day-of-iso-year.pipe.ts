import {Pipe, PipeTransform} from '@angular/core';
import {lastDayOfISOYear} from 'date-fns';


@Pipe({ name: 'dfnsLastDayOfISOYear' })
export class LastDayOfISOYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsLastDayOfISOYear: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(LastDayOfISOYearPipe.NO_ARGS_ERROR);
    }
    return lastDayOfISOYear(date);
  }
}
