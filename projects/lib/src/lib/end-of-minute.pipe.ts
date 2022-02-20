import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import endOfMinute from 'date-fns/endOfMinute';

@Pipe({ name: 'dfnsEndOfMinute' })
export class EndOfMinutePipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfMinute(date);
  }
}

@NgModule({
  declarations: [EndOfMinutePipe],
  exports: [EndOfMinutePipe]
})
export class EndOfMinutePipeModule {}
