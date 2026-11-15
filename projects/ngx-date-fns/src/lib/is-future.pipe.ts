import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isFuture } from 'date-fns/isFuture';

@Pipe({ name: 'dfnsIsFuture', standalone: true })
export class IsFuturePipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isFuture(date);
  }
}

/**
 * @deprecated Import the standalone `IsFuturePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsFuturePipe],
  exports: [IsFuturePipe]
})
export class IsFuturePipeModule {}
