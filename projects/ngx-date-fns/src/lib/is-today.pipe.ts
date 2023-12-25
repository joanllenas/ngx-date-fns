import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isToday } from 'date-fns/isToday';

@Pipe({ name: 'dfnsIsToday' })
export class IsTodayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isToday(date);
  }
}

@NgModule({
  declarations: [IsTodayPipe],
  exports: [IsTodayPipe]
})
export class IsTodayPipeModule {}
