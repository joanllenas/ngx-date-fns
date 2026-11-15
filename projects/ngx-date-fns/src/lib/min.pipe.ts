import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { min } from 'date-fns/min';

@Pipe({ name: 'dfnsMin', standalone: true })
export class MinPipe implements PipeTransform {
  transform(dates: DateFnsInputDate[]): Date {
    return min(dates);
  }
}

/**
 * @deprecated Import the standalone `MinPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [MinPipe],
  exports: [MinPipe]
})
export class MinPipeModule {}
