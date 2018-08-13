import { Pipe, PipeTransform } from '@angular/core';
import { addDays } from 'date-fns';

@Pipe({ name: 'dfnsAddDays' })
export class AddDaysPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsAddDays: missing required arguments';

  transform(
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date {
    if (!date) {
      throw new Error(AddDaysPipe.NO_ARGS_ERROR);
    }
    return addDays(date, amount || 0);
  }
}
