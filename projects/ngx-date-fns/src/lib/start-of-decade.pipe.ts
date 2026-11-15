import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { startOfDecade } from 'date-fns/startOfDecade';

@Pipe({ name: 'dfnsStartOfDecade', standalone: true })
export class StartOfDecadePipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfDecade(date);
  }
}

/**
 * @deprecated Import the standalone `StartOfDecadePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [StartOfDecadePipe],
  exports: [StartOfDecadePipe]
})
export class StartOfDecadePipeModule {}
