import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { startOfMinute } from 'date-fns';

@Pipe({ name: 'dfnsStartOfMinute' })
export class StartOfMinutePipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsStartOfMinute: missing required arguments';

  transform(date: string | number | Date): Date {
    if (isInvalidDate(date)) {
      throw new Error(StartOfMinutePipe.NO_ARGS_ERROR);
    }
    return startOfMinute(date);
  }
}
