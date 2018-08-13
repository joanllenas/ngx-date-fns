import { Pipe, PipeTransform } from '@angular/core';
import { startOfISOWeek } from 'date-fns';

@Pipe({ name: 'dfnsStartOfISOWeek' })
export class StartOfISOWeekPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsStartOfISOWeek: missing required arguments';

  transform(date: string | number | Date): Date {
    if (!date) {
      throw new Error(StartOfISOWeekPipe.NO_ARGS_ERROR);
    }
    return startOfISOWeek(date);
  }
}
