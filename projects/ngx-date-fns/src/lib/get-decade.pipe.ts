import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getDecade } from 'date-fns/getDecade';

@Pipe({ name: 'dfnsGetDecade', standalone: true })
export class GetDecadePipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getDecade(date);
  }
}

/**
 * @deprecated Import the standalone `GetDecadePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetDecadePipe],
  exports: [GetDecadePipe]
})
export class GetDecadePipeModule {}
