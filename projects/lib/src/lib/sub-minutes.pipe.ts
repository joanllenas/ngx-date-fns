import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import subMinutes from 'date-fns/subMinutes';

@Pipe({ name: 'dfnsSubMinutes' })
export class SubMinutesPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subMinutes(date, amount);
  }
}

@NgModule({
  declarations: [SubMinutesPipe],
  exports: [SubMinutesPipe]
})
export class SubMinutesPipeModule {}
