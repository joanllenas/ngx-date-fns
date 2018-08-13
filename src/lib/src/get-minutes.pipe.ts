import {Pipe, PipeTransform} from '@angular/core';
import {getMinutes} from 'date-fns';


@Pipe({ name: 'dfnsGetMinutes' })
export class GetMinutesPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetMinutes: missing required arguments';

  transform(
    date: string | number | Date
  ): number {
    if (!date) {
        throw new Error(GetMinutesPipe.NO_ARGS_ERROR);
    }
    return getMinutes(date);
  }
}
