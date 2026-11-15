import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getQuarter } from 'date-fns/getQuarter';

@Pipe({ name: 'dfnsGetQuarter', standalone: true })
export class GetQuarterPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getQuarter(date);
  }
}

/**
 * @deprecated Import the standalone `GetQuarterPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetQuarterPipe],
  exports: [GetQuarterPipe]
})
export class GetQuarterPipeModule {}
