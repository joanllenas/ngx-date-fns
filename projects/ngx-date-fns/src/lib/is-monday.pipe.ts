import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isMonday } from 'date-fns/isMonday';

@Pipe({
  name: 'dfnsIsMonday'
})
export class IsMondayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isMonday(date);
  }
}

@NgModule({
  declarations: [IsMondayPipe],
  exports: [IsMondayPipe]
})
export class IsMondayPipeModule {}
