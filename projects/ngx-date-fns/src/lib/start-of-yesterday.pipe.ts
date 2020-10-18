import { NgModule, Pipe, PipeTransform } from '@angular/core';
import startOfYesterday from 'date-fns/startOfYesterday';

@Pipe({ name: 'dfnsStartOfYesterday' })
export class StartOfYesterdayPipe implements PipeTransform {
  transform(): Date {
    return startOfYesterday();
  }
}

@NgModule({
  declarations: [StartOfYesterdayPipe],
  exports: [StartOfYesterdayPipe]
})
export class StartOfYesterdayPipeModule {}
