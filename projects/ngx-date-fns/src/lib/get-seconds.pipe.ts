import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getSeconds } from 'date-fns/getSeconds';

@Pipe({ name: 'dfnsGetSeconds', standalone: true })
export class GetSecondsPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getSeconds(date);
  }
}

/**
 * @deprecated Import the standalone `GetSecondsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetSecondsPipe],
  exports: [GetSecondsPipe]
})
export class GetSecondsPipeModule {}
