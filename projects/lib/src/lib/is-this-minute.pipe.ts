import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isThisMinute from 'date-fns/isThisMinute';

@Pipe({
  name: 'dfnsIsThisMinute'
})
export class IsThisMinutePipe implements PipeTransform {

  transform(date: DateFnsInputDate): boolean {
    return isThisMinute(date);
  }

}

@NgModule({
  declarations: [IsThisMinutePipe],
  exports: [IsThisMinutePipe]
})
export class IsThisMinutePipeModule { }
