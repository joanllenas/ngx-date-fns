import {Pipe, PipeTransform} from '@angular/core';
import * as startOfYesterday from 'date-fns/start_of_yesterday';

@Pipe({ name: 'dfnsStartOfYesterday' })
export class StartOfYesterdayPipe implements PipeTransform {

  transform(): Date {
    return startOfYesterday();
  }
}
