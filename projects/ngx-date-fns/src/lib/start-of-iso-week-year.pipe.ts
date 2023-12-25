import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { startOfISOWeekYear } from 'date-fns/startOfISOWeekYear';

@Pipe({ name: 'dfnsStartOfISOWeekYear' })
export class StartOfISOWeekYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfISOWeekYear(date);
  }
}

@NgModule({
  declarations: [StartOfISOWeekYearPipe],
  exports: [StartOfISOWeekYearPipe]
})
export class StartOfISOWeekYearPipeModule {}
