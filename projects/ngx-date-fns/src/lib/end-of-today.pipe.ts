import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { endOfToday } from 'date-fns/endOfToday';

@Pipe({ name: 'dfnsEndOfToday', standalone: true })
export class EndOfTodayPipe implements PipeTransform {
  transform(): Date {
    return endOfToday();
  }
}

/**
 * @deprecated Import the standalone `EndOfTodayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [EndOfTodayPipe],
  exports: [EndOfTodayPipe]
})
export class EndOfTodayPipeModule {}
