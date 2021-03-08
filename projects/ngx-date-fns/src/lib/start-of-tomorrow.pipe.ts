import { NgModule, Pipe, PipeTransform } from '@angular/core';
import startOfTomorrow from 'date-fns/esm/startOfTomorrow';

@Pipe({ name: 'dfnsStartOfTomorrow' })
export class StartOfTomorrowPipe implements PipeTransform {
  transform(): Date {
    return startOfTomorrow();
  }
}

@NgModule({
  declarations: [StartOfTomorrowPipe],
  exports: [StartOfTomorrowPipe]
})
export class StartOfTomorrowPipeModule {}
