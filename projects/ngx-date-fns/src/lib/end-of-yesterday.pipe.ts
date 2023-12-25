import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { endOfYesterday } from 'date-fns/endOfYesterday';

@Pipe({ name: 'dfnsEndOfYesterday' })
export class EndOfYesterdayPipe implements PipeTransform {
  transform(): Date {
    return endOfYesterday();
  }
}

@NgModule({
  declarations: [EndOfYesterdayPipe],
  exports: [EndOfYesterdayPipe]
})
export class EndOfYesterdayPipeModule {}
