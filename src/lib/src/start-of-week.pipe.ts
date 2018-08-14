import { Pipe, PipeTransform } from '@angular/core';
import { startOfWeek } from 'date-fns';
import { Options } from './types/options';

@Pipe({ name: 'dfnsStartOfWeek' })
export class StartOfWeekPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsStartOfWeek: missing required arguments';

  transform(date: string | number | Date, options?: Options): Date {
    if (!date) {
      throw new Error(StartOfWeekPipe.NO_ARGS_ERROR);
    }
    return startOfWeek(date, options);
  }
}
