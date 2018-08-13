import { Pipe, PipeTransform } from '@angular/core';
import { addISOWeekYears } from 'date-fns';

@Pipe({ name: 'dfnsAddISOWeekYears' })
export class AddISOWeekYearsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsAddISOWeekYears: missing required arguments';

  transform(date: Date | string | number, amount: number): Date {
    if (!date) {
      throw new Error(AddISOWeekYearsPipe.NO_ARGS_ERROR);
    }
    return addISOWeekYears(date, amount || 0);
  }
}
