import { Pipe, PipeTransform } from '@angular/core';
import { endOfWeek } from 'date-fns';

@Pipe({ name: 'dfnsEndOfWeek' })
export class EndOfWeekPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsEndOfWeek: missing required arguments';

  transform(date: string | number | Date, options?: Options): Date {
    if (!date) {
      throw new Error(EndOfWeekPipe.NO_ARGS_ERROR);
    }
    return endOfWeek(date, options);
  }
}
