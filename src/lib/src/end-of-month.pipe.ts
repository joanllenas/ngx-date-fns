import { Pipe, PipeTransform } from '@angular/core';
import { endOfMonth } from 'date-fns';

@Pipe({ name: 'dfnsEndOfMonth' })
export class EndOfMonthPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsEndOfMonth: missing required arguments';

  transform(date: string | number | Date): Date {
    if (!date) {
      throw new Error(EndOfMonthPipe.NO_ARGS_ERROR);
    }
    return endOfMonth(date);
  }
}
