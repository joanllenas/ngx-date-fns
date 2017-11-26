import {Pipe, PipeTransform} from '@angular/core';
import * as formatDate from 'date-fns/format';

@Pipe({ name: 'dfnsFormat' })
export class FormatPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsFormat: missing required arguments';

  transform(
    date: string | number | Date,
    format?: string,
    options?: {
      locale?: Object
    }
  ): string {
    if (!date) {
        throw new Error(FormatPipe.NO_ARGS_ERROR);
    }
    return formatDate(date, format, options);
  }
}
