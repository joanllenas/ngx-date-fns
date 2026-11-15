import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { startOfSecond } from 'date-fns/startOfSecond';

@Pipe({ name: 'dfnsStartOfSecond', standalone: true })
export class StartOfSecondPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfSecond(date);
  }
}

/**
 * @deprecated Import the standalone `StartOfSecondPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [StartOfSecondPipe],
  exports: [StartOfSecondPipe]
})
export class StartOfSecondPipeModule {}
