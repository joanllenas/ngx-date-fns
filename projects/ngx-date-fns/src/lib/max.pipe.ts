import { Pipe, PipeTransform } from '@angular/core';
import { max } from 'date-fns';

@Pipe({ name: 'dfnsMax' })
export class MaxPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsMax: you have to provide at least two dates';

  transform(dates: (Date | string | number)[]): Date {
    if (!dates || !Array.isArray(dates) || dates.length < 2) {
      throw new Error(MaxPipe.NO_ARGS_ERROR);
    }
    return max(...dates);
  }
}
