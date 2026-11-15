import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { max } from 'date-fns/max';

@Pipe({ name: 'dfnsMax', standalone: true })
export class MaxPipe implements PipeTransform {
  transform(dates: DateFnsInputDate[]): Date {
    return max(dates);
  }
}

/**
 * @deprecated Import the standalone `MaxPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [MaxPipe],
  exports: [MaxPipe]
})
export class MaxPipeModule {}
