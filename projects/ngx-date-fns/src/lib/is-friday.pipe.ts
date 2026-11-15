import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isFriday } from 'date-fns/isFriday';

@Pipe({
  name: 'dfnsIsFriday',
  standalone: true
})
export class IsFridayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isFriday(date);
  }
}

/**
 * @deprecated Import the standalone `IsFridayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsFridayPipe],
  exports: [IsFridayPipe]
})
export class IsFridayPipeModule {}
