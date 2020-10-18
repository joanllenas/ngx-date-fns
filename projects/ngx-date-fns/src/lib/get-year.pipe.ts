import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getYear from 'date-fns/getYear';

@Pipe({ name: 'dfnsGetYear' })
export class GetYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getYear(date);
  }
}

@NgModule({
  declarations: [GetYearPipe],
  exports: [GetYearPipe]
})
export class GetYearPipeModule {}
