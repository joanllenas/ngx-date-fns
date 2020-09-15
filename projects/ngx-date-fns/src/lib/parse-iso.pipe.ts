import { Pipe, PipeTransform } from '@angular/core';
import parseISO from 'date-fns/parseISO';

@Pipe({ name: 'dfnsParseIso' })
export class ParseIsoPipe implements PipeTransform {
  transform(
    dateString: string,
    options?: {
      additionalDigits?: 0 | 1 | 2;
    }
  ): Date {
    return parseISO(dateString, options);
  }
}
