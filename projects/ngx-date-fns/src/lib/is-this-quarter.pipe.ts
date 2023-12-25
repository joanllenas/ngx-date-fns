import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isThisQuarter } from 'date-fns/isThisQuarter';

@Pipe({
  name: 'dfnsIsThisQuarter'
})
export class IsThisQuarterPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isThisQuarter(date);
  }
}

@NgModule({
  declarations: [IsThisQuarterPipe],
  exports: [IsThisQuarterPipe]
})
export class IsThisQuarterPipeModule {}
