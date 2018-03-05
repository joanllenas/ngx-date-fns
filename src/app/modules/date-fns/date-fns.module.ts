import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistanceInWordsPipe } from './distance-in-words.pipe';
import { DistanceInWordsStrictPipe } from './distance-in-words-strict.pipe';
import { DistanceInWordsToNowPipe } from './distance-in-words-to-now.pipe';
import { FormatPipe } from './format.pipe';
import { GetOverlappingDaysInRangesPipe } from './get-overlapping-days-in-ranges.pipe';
import { GetMillisecondsPipe } from './get-milliseconds.pipe';
import { GetSecondsPipe } from './get-seconds.pipe';
import { GetMinutesPipe } from './get-minutes.pipe';
import { GetHoursPipe } from './get-hours.pipe';
import { GetDatePipe } from './get-date.pipe';
import { GetDayOfYearPipe } from './get-day-of-year.pipe';
import { GetDayPipe } from './get-day.pipe';
import { GetISODayPipe } from './get-iso-day.pipe';
import { GetDaysInMonthPipe } from './get-days-in-month.pipe';
import { GetMonthPipe } from './get-month.pipe';
import { GetDaysInYearPipe } from './get-days-in-year.pipe';
import { GetYearPipe } from './get-year.pipe';
import { GetISOWeeksInYearPipe } from './get-iso-weeks-in-year.pipe';
import { GetISOWeekPipe } from './get-iso-week.pipe';
import { MinPipe } from './min.pipe';
import { MaxPipe } from './max.pipe';
import { GetTimePipe } from './get-time.pipe';
import { ClosestToPipe } from './closest-to.pipe';
import { DifferenceInMillisecondsPipe } from './difference-in-milliseconds.pipe';
import { DifferenceInSecondsPipe } from './difference-in-seconds.pipe';
import { DifferenceInMinutesPipe } from './difference-in-minutes.pipe';
import { DifferenceInHoursPipe } from './difference-in-hours.pipe';
import { DifferenceInCalendarDaysPipe } from './difference-in-calendar-days.pipe';
import { DifferenceInDaysPipe } from './difference-in-days.pipe';
import { DifferenceInCalendarWeeksPipe } from './difference-in-calendar-weeks.pipe';
import { DifferenceInWeeksPipe } from './difference-in-weeks.pipe';
import { DifferenceInCalendarISOWeeksPipe } from './difference-in-calendar-iso-weeks.pipe';
import { DifferenceInCalendarMonthsPipe } from './difference-in-calendar-months.pipe';
import { AddMillisecondsPipe } from './add-milliseconds.pipe';
import { AddSecondsPipe } from './add-seconds.pipe';
import { AddMinutesPipe } from './add-minutes.pipe';
import { AddHoursPipe } from './add-hours.pipe';
import { AddDaysPipe } from './add-days.pipe';
import { AddWeeksPipe } from './add-weeks.pipe';
import { AddMonthsPipe } from './add-months.pipe';
import { AddQuartersPipe } from './add-quarters.pipe';
import { AddYearsPipe } from './add-years.pipe';
import { AddISOYearsPipe } from './add-iso-years.pipe';
import { SubMillisecondsPipe } from './sub-milliseconds.pipe';
import { SubSecondsPipe } from './sub-seconds.pipe';
import { SubMinutesPipe } from './sub-minutes.pipe';
import { SubHoursPipe } from './sub-hours.pipe';
import { SubDaysPipe } from './sub-days.pipe';
import { SubWeeksPipe } from './sub-weeks.pipe';
import { SubMonthsPipe } from './sub-months.pipe';
import { SubQuartersPipe } from './sub-quarters.pipe';
import { SubYearsPipe } from './sub-years.pipe';
import { SubISOYearsPipe } from './sub-iso-years.pipe';
import { EndOfSecondPipe } from './end-of-second.pipe';
import { EndOfMinutePipe } from './end-of-minute.pipe';
import { EndOfHourPipe } from './end-of-hour.pipe';
import { EndOfDayPipe } from './end-of-day.pipe';
import { EndOfYesterdayPipe } from './end-of-yesterday.pipe';
import { EndOfTodayPipe } from './end-of-today.pipe';
import { EndOfTomorrowPipe } from './end-of-tomorrow.pipe';
import { EndOfWeekPipe } from './end-of-week.pipe';
import { EndOfISOWeekPipe } from './end-of-iso-week.pipe';
import { EndOfMonthPipe } from './end-of-month.pipe';
import { EndOfQuarterPipe } from './end-of-quarter.pipe';
import { EndOfYearPipe } from './end-of-year.pipe';
import { EndOfISOYearPipe } from './end-of-iso-year.pipe';
import { StartOfSecondPipe } from './start-of-second.pipe';
import { StartOfMinutePipe } from './start-of-minute.pipe';
import { StartOfHourPipe } from './start-of-hour.pipe';
import { StartOfDayPipe } from './start-of-day.pipe';
import { StartOfTodayPipe } from './start-of-today.pipe';
import { StartOfTomorrowPipe } from './start-of-tomorrow.pipe';
import { StartOfYesterdayPipe } from './start-of-yesterday.pipe';
import { StartOfWeekPipe } from './start-of-week.pipe';
import { StartOfISOWeekPipe } from './start-of-iso-week.pipe';
import { StartOfMonthPipe } from './start-of-month.pipe';
import { StartOfQuarterPipe } from './start-of-quarter.pipe';
import { StartOfYearPipe } from './start-of-year.pipe';
import { StartOfISOYearPipe } from './start-of-iso-year.pipe';
import { LastDayOfWeekPipe } from './last-day-of-week.pipe';
import { LastDayOfISOWeekPipe } from './last-day-of-iso-week.pipe';
import { LastDayOfMonthPipe } from './last-day-of-month.pipe';
import { LastDayOfQuarterPipe } from './last-day-of-quarter.pipe';
import { LastDayOfISOYearPipe } from './last-day-of-iso-year.pipe';
import { LastDayOfYearPipe } from './last-day-of-year.pipe';
import { DifferenceInMonthsPipe } from './difference-in-months.pipe';
import { DifferenceInCalendarQuartersPipe } from './difference-in-calendar-quarters.pipe';
import { DifferenceInQuartersPipe } from './difference-in-quarters.pipe';
import { DifferenceInCalendarYearsPipe } from './difference-in-calendar-years.pipe';
import { DifferenceInYearsPipe } from './difference-in-years.pipe';
import { DifferenceInCalendarISOYearsPipe } from './difference-in-calendar-iso-years.pipe';
import { DifferenceInISOYearsPipe } from './difference-in-iso-years.pipe';
import { GetQuarterPipe } from './get-quarter.pipe';
import { GetISOYearPipe } from './get-iso-year.pipe';


const PIPES = [
  // Distance
  DistanceInWordsPipe,
  DistanceInWordsStrictPipe,
  DistanceInWordsToNowPipe,

  // Get
  GetOverlappingDaysInRangesPipe,
  GetMillisecondsPipe,
  GetSecondsPipe,
  GetMinutesPipe,
  GetHoursPipe,
  GetDatePipe,
  GetDayOfYearPipe,
  GetDayPipe,
  GetQuarterPipe,
  GetISODayPipe,
  GetISOYearPipe,
  GetDaysInMonthPipe,
  GetMonthPipe,
  GetDaysInYearPipe,
  GetYearPipe,
  GetISOWeeksInYearPipe,
  GetISOWeekPipe,
  GetTimePipe,

  // Min / Max
  MinPipe,
  MaxPipe,

  // Misc
  ClosestToPipe,
  FormatPipe,

  // Difference
  DifferenceInMillisecondsPipe,
  DifferenceInSecondsPipe,
  DifferenceInMinutesPipe,
  DifferenceInMonthsPipe,
  DifferenceInHoursPipe,
  DifferenceInCalendarDaysPipe,
  DifferenceInCalendarISOYearsPipe,
  DifferenceInCalendarYearsPipe,
  DifferenceInDaysPipe,
  DifferenceInCalendarWeeksPipe,
  DifferenceInISOYearsPipe,
  DifferenceInWeeksPipe,
  DifferenceInCalendarISOWeeksPipe,
  DifferenceInCalendarMonthsPipe,
  DifferenceInCalendarQuartersPipe,
  DifferenceInQuartersPipe,
  DifferenceInYearsPipe,

  // Add
  AddMillisecondsPipe,
  AddSecondsPipe,
  AddMinutesPipe,
  AddHoursPipe,
  AddDaysPipe,
  AddWeeksPipe,
  AddMonthsPipe,
  AddQuartersPipe,
  AddYearsPipe,
  AddISOYearsPipe,

  // Subtract
  SubMillisecondsPipe,
  SubSecondsPipe,
  SubMinutesPipe,
  SubHoursPipe,
  SubDaysPipe,
  SubWeeksPipe,
  SubMonthsPipe,
  SubQuartersPipe,
  SubYearsPipe,
  SubISOYearsPipe,

  // End
  EndOfSecondPipe,
  EndOfMinutePipe,
  EndOfHourPipe,
  EndOfDayPipe,
  EndOfYesterdayPipe,
  EndOfTodayPipe,
  EndOfTomorrowPipe,
  EndOfWeekPipe,
  EndOfISOWeekPipe,
  EndOfMonthPipe,
  EndOfQuarterPipe,
  EndOfYearPipe,
  EndOfISOYearPipe,

  // Start
  StartOfSecondPipe,
  StartOfMinutePipe,
  StartOfHourPipe,
  StartOfDayPipe,
  StartOfTodayPipe,
  StartOfTomorrowPipe,
  StartOfYesterdayPipe,
  StartOfWeekPipe,
  StartOfISOWeekPipe,
  StartOfMonthPipe,
  StartOfQuarterPipe,
  StartOfYearPipe,
  StartOfISOYearPipe,

  // Last
  LastDayOfWeekPipe,
  LastDayOfISOWeekPipe,
  LastDayOfMonthPipe,
  LastDayOfQuarterPipe,
  LastDayOfYearPipe,
  LastDayOfISOYearPipe,
];

@NgModule({
  imports: [CommonModule],
  declarations: PIPES,
  exports: PIPES
})
export class DateFnsModule { }
