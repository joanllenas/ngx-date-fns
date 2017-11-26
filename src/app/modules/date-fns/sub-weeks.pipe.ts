import {Pipe, PipeTransform} from '@angular/core';
import * as subWeeksNs from 'date-fns/sub_weeks';
const subWeeks = subWeeksNs;

@Pipe({ name: 'dfnsSubWeeks' })
export class SubWeeksPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsSubWeeks: missing required arguments';

  transform(
    date: (Date | string | number),
    amount: number
  ): Date {
    if (!date) {
        throw new Error(SubWeeksPipe.NO_ARGS_ERROR);
    }
    return subWeeks(date, amount || 0);
  }
}
