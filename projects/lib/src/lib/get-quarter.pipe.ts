import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getQuarter from 'date-fns/getQuarter';

@Pipe({ name: 'dfnsGetQuarter' })
export class GetQuarterPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getQuarter(date);
  }
}

@NgModule({
  declarations: [GetQuarterPipe],
  exports: [GetQuarterPipe]
})
export class GetQuarterPipeModule {}
