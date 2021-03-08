import { NgModule, Pipe, PipeTransform } from '@angular/core';
import endOfToday from 'date-fns/esm/endOfToday';

@Pipe({ name: 'dfnsEndOfToday' })
export class EndOfTodayPipe implements PipeTransform {
  transform(): Date {
    return endOfToday();
  }
}

@NgModule({
  declarations: [EndOfTodayPipe],
  exports: [EndOfTodayPipe]
})
export class EndOfTodayPipeModule {}
