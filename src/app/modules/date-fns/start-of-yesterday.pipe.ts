import {Pipe, PipeTransform} from '@angular/core';
import * as startOfYesterdayNs from 'date-fns/start_of_yesterday';
const startOfYesterday = startOfYesterdayNs;

@Pipe({ name: 'dfnsStartOfYesterday' })
export class StartOfYesterdayPipe implements PipeTransform {

  transform(): Date {
    return startOfYesterday();
  }
}
