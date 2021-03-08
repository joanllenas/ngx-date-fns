import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import subHours from 'date-fns/esm/subHours';

@Pipe({ name: 'dfnsSubHours' })
export class SubHoursPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subHours(date, amount);
  }
}

@NgModule({
  declarations: [SubHoursPipe],
  exports: [SubHoursPipe]
})
export class SubHoursPipeModule {}
