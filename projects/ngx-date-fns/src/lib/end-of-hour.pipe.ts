import { Pipe, PipeTransform } from '@angular/core';
import { endOfHour } from 'date-fns';

@Pipe({ name: 'dfnsEndOfHour' })
export class EndOfHourPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsEndOfHour: missing required arguments';

  transform(date: string | number | Date): Date {
    if (!date) {
      throw new Error(EndOfHourPipe.NO_ARGS_ERROR);
    }
    return endOfHour(date);
  }
}
