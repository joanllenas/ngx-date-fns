import {Pipe, PipeTransform} from '@angular/core';
import * as endOfYesterdayNs from 'date-fns/end_of_yesterday';
const endOfYesterday = endOfYesterdayNs;

@Pipe({ name: 'dfnsEndOfYesterday' })
export class EndOfYesterdayPipe implements PipeTransform {

  transform(): Date {
    return endOfYesterday();
  }
}
