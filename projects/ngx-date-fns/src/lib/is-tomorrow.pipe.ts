import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isTomorrow } from 'date-fns/isTomorrow';

@Pipe({
  name: 'dfnsIsTomorrow',
  standalone: true
})
export class IsTomorrowPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isTomorrow(date);
  }
}

/**
 * @deprecated Import the standalone `IsTomorrowPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsTomorrowPipe],
  exports: [IsTomorrowPipe]
})
export class IsTomorrowPipeModule {}
