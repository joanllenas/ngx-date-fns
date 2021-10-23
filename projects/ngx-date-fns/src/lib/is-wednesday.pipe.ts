import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isWednesday from 'date-fns/isWednesday';

@Pipe({
  name: 'dfnsIsWednesday'
})
export class IsWednesdayPipe implements PipeTransform {

  transform(date: DateFnsInputDate): boolean {
    return isWednesday(date);
  }

}

@NgModule({
  declarations: [IsWednesdayPipe],
  exports: [IsWednesdayPipe]
})
export class IsWednesdayPipeModule { }
