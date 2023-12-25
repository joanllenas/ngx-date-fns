import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addWeeks } from 'date-fns/addWeeks';

@Pipe({ name: 'dfnsAddWeeks' })
export class AddWeeksPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addWeeks(date, amount);
  }
}

@NgModule({
  declarations: [AddWeeksPipe],
  exports: [AddWeeksPipe]
})
export class AddWeeksPipeModule {}
