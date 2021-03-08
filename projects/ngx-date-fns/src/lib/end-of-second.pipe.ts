import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import endOfSecond from 'date-fns/esm/endOfSecond';

@Pipe({ name: 'dfnsEndOfSecond' })
export class EndOfSecondPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfSecond(date);
  }
}

@NgModule({
  declarations: [EndOfSecondPipe],
  exports: [EndOfSecondPipe]
})
export class EndOfSecondPipeModule {}
