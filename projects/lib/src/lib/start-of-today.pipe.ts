import { NgModule, Pipe, PipeTransform } from '@angular/core';
import startOfToday from 'date-fns/startOfToday';

@Pipe({ name: 'dfnsStartOfToday' })
export class StartOfTodayPipe implements PipeTransform {
  transform(): Date {
    return startOfToday();
  }
}

@NgModule({
  declarations: [StartOfTodayPipe],
  exports: [StartOfTodayPipe]
})
export class StartOfTodayPipeModule {}
