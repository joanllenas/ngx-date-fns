import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isPast } from 'date-fns/isPast';

@Pipe({ name: 'dfnsIsPast', standalone: true })
export class IsPastPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isPast(date);
  }
}

/**
 * @deprecated Import the standalone `IsPastPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsPastPipe],
  exports: [IsPastPipe]
})
export class IsPastPipeModule {}
