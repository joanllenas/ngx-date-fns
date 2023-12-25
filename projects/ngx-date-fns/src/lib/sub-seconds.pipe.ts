import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { subSeconds } from 'date-fns/subSeconds';

@Pipe({ name: 'dfnsSubSeconds' })
export class SubSecondsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subSeconds(date, amount);
  }
}

@NgModule({
  declarations: [SubSecondsPipe],
  exports: [SubSecondsPipe]
})
export class SubSecondsPipeModule {}
