import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { endOfYesterday } from 'date-fns/endOfYesterday';

@Pipe({ name: 'dfnsEndOfYesterday', standalone: true })
export class EndOfYesterdayPipe implements PipeTransform {
  transform(): Date {
    return endOfYesterday();
  }
}

/**
 * @deprecated Import the standalone `EndOfYesterdayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [EndOfYesterdayPipe],
  exports: [EndOfYesterdayPipe]
})
export class EndOfYesterdayPipeModule {}
