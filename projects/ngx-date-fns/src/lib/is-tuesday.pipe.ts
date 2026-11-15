import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isTuesday } from 'date-fns/isTuesday';

@Pipe({
  name: 'dfnsIsTuesday',
  standalone: true
})
export class IsTuesdayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isTuesday(date);
  }
}

/**
 * @deprecated Import the standalone `IsTuesdayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsTuesdayPipe],
  exports: [IsTuesdayPipe]
})
export class IsTuesdayPipeModule {}
