import {Pipe, PipeTransform} from '@angular/core';
import * as getTime from 'date-fns/get_time';

@Pipe({ name: 'dfnsGetTime' })
export class GetTimePipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetTime: you have to provide a Date argument';

  transform(
    date: (Date | string | number)
  ): number {
    if (!date) {
        throw new Error(GetTimePipe.NO_ARGS_ERROR);
    }
    return getTime(date);
  }
}
