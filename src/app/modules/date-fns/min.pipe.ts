import {Pipe, PipeTransform} from '@angular/core';
import * as min from 'date-fns/min';

@Pipe({ name: 'dfnsMin' })
export class MinPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsMin: you have to provide at least two dates';

  transform(
    dates: (Date | string | number)[]
  ): Date {
    if (!dates || !Array.isArray(dates) || dates.length < 2 ) {
        throw new Error(MinPipe.NO_ARGS_ERROR);
    }
    return min(...dates);
  }
}
