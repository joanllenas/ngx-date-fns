import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getISODay from 'date-fns/esm/getISODay';

@Pipe({ name: 'dfnsGetISODay' })
export class GetISODayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getISODay(date);
  }
}

@NgModule({
  declarations: [GetISODayPipe],
  exports: [GetISODayPipe]
})
export class GetISODayPipeModule {}
