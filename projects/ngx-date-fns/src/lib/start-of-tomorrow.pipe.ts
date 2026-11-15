import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { startOfTomorrow } from 'date-fns/startOfTomorrow';

@Pipe({ name: 'dfnsStartOfTomorrow', standalone: true })
export class StartOfTomorrowPipe implements PipeTransform {
  transform(): Date {
    return startOfTomorrow();
  }
}

/**
 * @deprecated Import the standalone `StartOfTomorrowPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [StartOfTomorrowPipe],
  exports: [StartOfTomorrowPipe]
})
export class StartOfTomorrowPipeModule {}
