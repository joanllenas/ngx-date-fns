import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isThisSecond } from 'date-fns/isThisSecond';

@Pipe({
  name: 'dfnsIsThisSecond'
})
export class IsThisSecondPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isThisSecond(date);
  }
}

@NgModule({
  declarations: [IsThisSecondPipe],
  exports: [IsThisSecondPipe]
})
export class IsThisSecondPipeModule {}
