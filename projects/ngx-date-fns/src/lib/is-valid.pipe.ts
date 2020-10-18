import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isValid from 'date-fns/isValid';

@Pipe({ name: 'dfnsIsValid' })
export class IsValidPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isValid(date);
  }
}

@NgModule({
  declarations: [IsValidPipe],
  exports: [IsValidPipe]
})
export class IsValidPipeModule {}
