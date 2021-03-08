import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import subQuarters from 'date-fns/esm/subQuarters';

@Pipe({ name: 'dfnsSubQuarters' })
export class SubQuartersPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subQuarters(date, amount);
  }
}

@NgModule({
  declarations: [SubQuartersPipe],
  exports: [SubQuartersPipe]
})
export class SubQuartersPipeModule {}
