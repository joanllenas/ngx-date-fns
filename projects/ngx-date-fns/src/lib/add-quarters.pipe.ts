import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import addQuarters from 'date-fns/esm/addQuarters';

@Pipe({ name: 'dfnsAddQuarters' })
export class AddQuartersPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addQuarters(date, amount);
  }
}

@NgModule({
  declarations: [AddQuartersPipe],
  exports: [AddQuartersPipe]
})
export class AddQuartersPipeModule {}
