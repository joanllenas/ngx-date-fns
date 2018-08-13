import { Pipe, PipeTransform } from '@angular/core';
import { subISOWeekYears } from 'date-fns';

@Pipe({ name: 'dfnsSubISOWeekYears' })
export class SubISOWeekYearsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsSubISOWeekYears: missing required arguments';

  transform(date: Date | string | number, amount: number): Date {
    if (!date) {
      throw new Error(SubISOWeekYearsPipe.NO_ARGS_ERROR);
    }
    return subISOWeekYears(date, amount || 0);
  }
}
