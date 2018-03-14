import {Pipe, PipeTransform} from '@angular/core';
import {getMonth} from 'date-fns';


@Pipe({ name: 'dfnsGetMonth' })
export class GetMonthPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetMonth: missing required arguments';

  transform(
    date: string | number | Date
  ): number {
    if (!date) {
        throw new Error(GetMonthPipe.NO_ARGS_ERROR);
    }
    return getMonth(date);
  }
}
