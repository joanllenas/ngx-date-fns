import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import addHours from 'date-fns/esm/addHours';

@Pipe({ name: 'dfnsAddHours' })
export class AddHoursPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addHours(date, amount);
  }
}

@NgModule({
  declarations: [AddHoursPipe],
  exports: [AddHoursPipe]
})
export class AddHoursPipeModule {}
