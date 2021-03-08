import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isSameMonth from 'date-fns/esm/isSameMonth';

@Pipe({ name: 'dfnsIsSameMonth' })
export class IsSameMonthPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameMonth(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [IsSameMonthPipe],
  exports: [IsSameMonthPipe]
})
export class IsSameMonthPipeModule {}
