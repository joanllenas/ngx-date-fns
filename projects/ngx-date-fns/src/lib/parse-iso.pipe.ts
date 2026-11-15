import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { parseISO } from 'date-fns/parseISO';

@Pipe({ name: 'dfnsParseIso', standalone: true })
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

/**
 * @deprecated Import the standalone `ParseIsoPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [ParseIsoPipe],
  exports: [ParseIsoPipe]
})
export class ParseIsoPipeModule {}
