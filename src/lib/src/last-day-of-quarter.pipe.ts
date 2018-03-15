import {Pipe, PipeTransform} from '@angular/core';
import {lastDayOfQuarter} from 'date-fns';


@Pipe({ name: 'dfnsLastDayOfQuarter' })
export class LastDayOfQuarterPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsLastDayOfQuarter: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(LastDayOfQuarterPipe.NO_ARGS_ERROR);
    }
    return lastDayOfQuarter(date);
  }
}
