import {Pipe, PipeTransform} from '@angular/core';
import * as startOfISOWeekNs from 'date-fns/start_of_iso_week';
const startOfISOWeek = startOfISOWeekNs;

@Pipe({ name: 'dfnsStartOfISOWeek' })
export class StartOfISOWeekPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsStartOfISOWeek: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(StartOfISOWeekPipe.NO_ARGS_ERROR);
    }
    return startOfISOWeek(date);
  }
}
