import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { endOfTomorrow } from 'date-fns/endOfTomorrow';

@Pipe({ name: 'dfnsEndOfTomorrow' })
export class EndOfTomorrowPipe implements PipeTransform {
  transform(): Date {
    return endOfTomorrow();
  }
}

@NgModule({
  declarations: [EndOfTomorrowPipe],
  exports: [EndOfTomorrowPipe]
})
export class EndOfTomorrowPipeModule {}
