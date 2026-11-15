import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { endOfSecond } from 'date-fns/endOfSecond';

@Pipe({ name: 'dfnsEndOfSecond', standalone: true })
export class EndOfSecondPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfSecond(date);
  }
}

/**
 * @deprecated Import the standalone `EndOfSecondPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [EndOfSecondPipe],
  exports: [EndOfSecondPipe]
})
export class EndOfSecondPipeModule {}
