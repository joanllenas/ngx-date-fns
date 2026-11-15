import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getMilliseconds } from 'date-fns/getMilliseconds';

@Pipe({ name: 'dfnsGetMilliseconds', standalone: true })
export class GetMillisecondsPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getMilliseconds(date);
  }
}

/**
 * @deprecated Import the standalone `GetMillisecondsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetMillisecondsPipe],
  exports: [GetMillisecondsPipe]
})
export class GetMillisecondsPipeModule {}
