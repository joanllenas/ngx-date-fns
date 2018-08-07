import { Pipe, PipeTransform } from '@angular/core';
import { subMonths } from 'date-fns';

@Pipe({ name: 'dfnsSubMonths' })
export class SubMonthsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsSubMonths: missing required arguments';

  transform(date: Date | string | number, amount: number): Date {
    if (!date) {
      throw new Error(SubMonthsPipe.NO_ARGS_ERROR);
    }
    return subMonths(date, amount || 0);
  }
}
