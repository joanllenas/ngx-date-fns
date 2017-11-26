import {Pipe, PipeTransform} from '@angular/core';
import * as endOfYesterday from 'date-fns/end_of_yesterday';

@Pipe({ name: 'dfnsEndOfYesterday' })
export class EndOfYesterdayPipe implements PipeTransform {

  transform(): Date {
    return endOfYesterday();
  }
}
