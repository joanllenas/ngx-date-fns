import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isSameSecond from 'date-fns/isSameSecond';

@Pipe({
  name: 'dfnsIsSameSecond'
})
export class IsSameSecondPipe implements PipeTransform {

  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isSameSecond(dateLeft, dateRight);
  }

}

@NgModule({
  declarations: [IsSameSecondPipe],
  exports: [IsSameSecondPipe]
})
export class IsSameSecondPipeModule { }
