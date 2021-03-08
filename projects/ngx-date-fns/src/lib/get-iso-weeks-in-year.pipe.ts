import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getISOWeeksInYear from 'date-fns/esm/getISOWeeksInYear';

@Pipe({ name: 'dfnsGetISOWeeksInYear' })
export class GetISOWeeksInYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getISOWeeksInYear(date);
  }
}

@NgModule({
  declarations: [GetISOWeeksInYearPipe],
  exports: [GetISOWeeksInYearPipe]
})
export class GetISOWeeksInYearPipeModule {}
