import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isSameDay from 'date-fns/isSameMinute';

@Pipe({
  name: 'dfnsIsSameMinute'
})
export class IsSameMinutePipe implements PipeTransform {

  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameDay(dateLeft, dateRight);
  }

}

@NgModule({
  declarations: [IsSameMinutePipe],
  exports: [IsSameMinutePipe]
})
export class IsSameMinutePipeModule { }
