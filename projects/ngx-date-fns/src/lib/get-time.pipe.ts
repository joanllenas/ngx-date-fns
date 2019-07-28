import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { getTime } from 'date-fns';

@Pipe({ name: 'dfnsGetTime' })
export class GetTimePipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsGetTime: you have to provide a Date argument';

  transform(date: Date | string | number): number {
    if (isInvalidDate(date)) {
      throw new Error(GetTimePipe.NO_ARGS_ERROR);
    }
    return getTime(date);
  }
}
