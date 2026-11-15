import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { endOfTomorrow } from 'date-fns/endOfTomorrow';

@Pipe({ name: 'dfnsEndOfTomorrow', standalone: true })
export class EndOfTomorrowPipe implements PipeTransform {
  transform(): Date {
    return endOfTomorrow();
  }
}

/**
 * @deprecated Import the standalone `EndOfTomorrowPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [EndOfTomorrowPipe],
  exports: [EndOfTomorrowPipe]
})
export class EndOfTomorrowPipeModule {}
