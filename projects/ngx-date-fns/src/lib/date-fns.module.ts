import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
// Pipes
import { AddBusinessDaysPipe } from './add-business-days.pipe';
import { AddDaysPipe } from './add-days.pipe';
import { AddHoursPipe } from './add-hours.pipe';
import { AddISOWeekYearsPipe } from './add-iso-week-years.pipe';
import { AddMillisecondsPipe } from './add-milliseconds.pipe';
import { AddMinutesPipe } from './add-minutes.pipe';
import { AddMonthsPipe } from './add-months.pipe';
import { AddQuartersPipe } from './add-quarters.pipe';
import { AddSecondsPipe } from './add-seconds.pipe';
import { AddWeeksPipe } from './add-weeks.pipe';
import { AddYearsPipe } from './add-years.pipe';
import { ClosestToPipe } from './closest-to.pipe';
import { FormatPipe } from './format.pipe';
import { DifferenceInCalendarDaysPipe } from './difference-in-calendar-days.pipe';
import { DifferenceInCalendarISOWeeksPipe } from './difference-in-calendar-iso-weeks.pipe';
import { DifferenceInCalendarISOWeekYearsPipe } from './difference-in-calendar-iso-week-years.pipe';
import { DifferenceInCalendarMonthsPipe } from './difference-in-calendar-months.pipe';
import { DifferenceInCalendarWeeksPipe } from './difference-in-calendar-weeks.pipe';
import { DifferenceInCalendarYearsPipe } from './difference-in-calendar-years.pipe';
import { DifferenceInDaysPipe } from './difference-in-days.pipe';
import { DifferenceInHoursPipe } from './difference-in-hours.pipe';
import { DifferenceInISOWeekYearsPipe } from './difference-in-iso-week-years.pipe';
import { DifferenceInMillisecondsPipe } from './difference-in-milliseconds.pipe';
import { DifferenceInMinutesPipe } from './difference-in-minutes.pipe';
import { DifferenceInMonthsPipe } from './difference-in-months.pipe';
import { DifferenceInQuartersPipe } from './difference-in-quarters.pipe';
import { DifferenceInSecondsPipe } from './difference-in-seconds.pipe';
import { DifferenceInWeeksPipe } from './difference-in-weeks.pipe';
import { DifferenceInYearsPipe } from './difference-in-years.pipe';
import { DifferenceInBusinessDaysPipe } from './difference-in-business-days.pipe';
import { FormatDistancePipe } from './format-distance.pipe';
import { FormatDistanceStrictPipe } from './format-distance-strict.pipe';
import { FormatDistanceToNowPipe } from './format-distance-to-now.pipe';
import { EndOfDayPipe } from './end-of-day.pipe';
import { EndOfHourPipe } from './end-of-hour.pipe';
import { EndOfISOWeekPipe } from './end-of-iso-week.pipe';
import { EndOfISOWeekYearPipe } from './end-of-iso-week-year.pipe';
import { EndOfMinutePipe } from './end-of-minute.pipe';
import { EndOfMonthPipe } from './end-of-month.pipe';
import { EndOfQuarterPipe } from './end-of-quarter.pipe';
import { EndOfSecondPipe } from './end-of-second.pipe';
import { EndOfTodayPipe } from './end-of-today.pipe';
import { EndOfTomorrowPipe } from './end-of-tomorrow.pipe';
import { EndOfWeekPipe } from './end-of-week.pipe';
import { EndOfYearPipe } from './end-of-year.pipe';
import { EndOfYesterdayPipe } from './end-of-yesterday.pipe';
import { GetDatePipe } from './get-date.pipe';
import { GetDayOfYearPipe } from './get-day-of-year.pipe';
import { GetDayPipe } from './get-day.pipe';
import { GetDaysInMonthPipe } from './get-days-in-month.pipe';
import { GetDaysInYearPipe } from './get-days-in-year.pipe';
import { GetHoursPipe } from './get-hours.pipe';
import { GetISODayPipe } from './get-iso-day.pipe';
import { GetISOWeekPipe } from './get-iso-week.pipe';
import { GetISOWeeksInYearPipe } from './get-iso-weeks-in-year.pipe';
import { GetMillisecondsPipe } from './get-milliseconds.pipe';
import { GetMinutesPipe } from './get-minutes.pipe';
import { GetMonthPipe } from './get-month.pipe';
import { GetOverlappingDaysInIntervalsPipe } from './get-overlapping-days-in-intervals.pipe';
import { GetQuarterPipe } from './get-quarter.pipe';
import { GetSecondsPipe } from './get-seconds.pipe';
import { GetTimePipe } from './get-time.pipe';
import { GetYearPipe } from './get-year.pipe';
import { GetUnixTimePipe } from './get-unix-time.pipe';
import { GetWeekPipe } from './get-week';
import { GetWeekOfMonthPipe } from './get-week-of-month.pipe';
import { GetWeeksInMonthPipe } from './get-weeks-in-month.pipe';
import { GetDecadePipe } from './get-decade.pipe';
import { GetWeekYearPipe } from './get-week-year.pipe';
import { LastDayOfISOWeekPipe } from './last-day-of-iso-week.pipe';
import { LastDayOfISOWeekYearPipe } from './last-day-of-iso-week-year.pipe';
import { LastDayOfMonthPipe } from './last-day-of-month.pipe';
import { LastDayOfQuarterPipe } from './last-day-of-quarter.pipe';
import { LastDayOfWeekPipe } from './last-day-of-week.pipe';
import { LastDayOfYearPipe } from './last-day-of-year.pipe';
import { LastDayOfDecadePipe } from './last-day-of-decade.pipe';
import { MaxPipe } from './max.pipe';
import { MinPipe } from './min.pipe';
import { StartOfDayPipe } from './start-of-day.pipe';
import { StartOfHourPipe } from './start-of-hour.pipe';
import { StartOfISOWeekPipe } from './start-of-iso-week.pipe';
import { StartOfISOWeekYearPipe } from './start-of-iso-week-year.pipe';
import { StartOfMinutePipe } from './start-of-minute.pipe';
import { StartOfMonthPipe } from './start-of-month.pipe';
import { StartOfQuarterPipe } from './start-of-quarter.pipe';
import { StartOfSecondPipe } from './start-of-second.pipe';
import { StartOfTodayPipe } from './start-of-today.pipe';
import { StartOfTomorrowPipe } from './start-of-tomorrow.pipe';
import { StartOfWeekPipe } from './start-of-week.pipe';
import { StartOfYearPipe } from './start-of-year.pipe';
import { StartOfYesterdayPipe } from './start-of-yesterday.pipe';
import { StartOfDecadePipe } from './start-of-decade.pipe';
import { StartOfWeekYearPipe } from './start-of-week-year.pipe';
import { SubDaysPipe } from './sub-days.pipe';
import { SubHoursPipe } from './sub-hours.pipe';
import { SubISOWeekYearsPipe } from './sub-iso-week-years.pipe';
import { SubMillisecondsPipe } from './sub-milliseconds.pipe';
import { SubMinutesPipe } from './sub-minutes.pipe';
import { SubMonthsPipe } from './sub-months.pipe';
import { SubQuartersPipe } from './sub-quarters.pipe';
import { SubSecondsPipe } from './sub-seconds.pipe';
import { SubWeeksPipe } from './sub-weeks.pipe';
import { SubYearsPipe } from './sub-years.pipe';
import { IsAfterPipe } from './is-after.pipe';
import { IsBeforePipe } from './is-before.pipe';
import { IsDatePipe } from './is-date.pipe';
import { IsEqualPipe } from './is-equal.pipe';
import { IsFuturePipe } from './is-future.pipe';
import { IsPastPipe } from './is-past.pipe';
import { IsValidPipe } from './is-valid.pipe';
import { WeekdayNamePipe } from './utils/weekday-name.pipe';
import { IsWeekendPipe } from './is-weekend.pipe';
import { IsTodayPipe } from './is-today.pipe';
import { IsSameMonthPipe } from './is-same-month.pipe';
import { ParsePipe } from './parse.pipe';
import { IsSameYearPipe } from './is-same-year.pipe';

const PIPES = [
  AddBusinessDaysPipe,
  AddDaysPipe,
  AddHoursPipe,
  AddISOWeekYearsPipe,
  AddMillisecondsPipe,
  AddMinutesPipe,
  AddMonthsPipe,
  AddQuartersPipe,
  AddSecondsPipe,
  AddWeeksPipe,
  AddYearsPipe,
  ClosestToPipe,
  FormatPipe,
  DifferenceInCalendarDaysPipe,
  DifferenceInCalendarISOWeeksPipe,
  DifferenceInCalendarISOWeekYearsPipe,
  DifferenceInCalendarMonthsPipe,
  DifferenceInCalendarWeeksPipe,
  DifferenceInCalendarYearsPipe,
  DifferenceInDaysPipe,
  DifferenceInHoursPipe,
  DifferenceInISOWeekYearsPipe,
  DifferenceInMillisecondsPipe,
  DifferenceInMinutesPipe,
  DifferenceInMonthsPipe,
  DifferenceInQuartersPipe,
  DifferenceInSecondsPipe,
  DifferenceInWeeksPipe,
  DifferenceInYearsPipe,
  DifferenceInBusinessDaysPipe,
  FormatDistancePipe,
  FormatDistanceStrictPipe,
  FormatDistanceToNowPipe,
  EndOfDayPipe,
  EndOfHourPipe,
  EndOfISOWeekYearPipe,
  EndOfISOWeekPipe,
  EndOfMinutePipe,
  EndOfMonthPipe,
  EndOfQuarterPipe,
  EndOfSecondPipe,
  EndOfTodayPipe,
  EndOfTomorrowPipe,
  EndOfWeekPipe,
  EndOfYearPipe,
  EndOfYesterdayPipe,
  GetDatePipe,
  GetDayOfYearPipe,
  GetDayPipe,
  GetDaysInMonthPipe,
  GetDaysInYearPipe,
  GetHoursPipe,
  GetISODayPipe,
  GetISOWeekPipe,
  GetISOWeeksInYearPipe,
  GetMillisecondsPipe,
  GetMinutesPipe,
  GetMonthPipe,
  GetOverlappingDaysInIntervalsPipe,
  GetQuarterPipe,
  GetSecondsPipe,
  GetTimePipe,
  GetUnixTimePipe,
  GetYearPipe,
  GetWeekPipe,
  GetWeekOfMonthPipe,
  GetWeeksInMonthPipe,
  GetDecadePipe,
  GetWeekYearPipe,
  LastDayOfISOWeekPipe,
  LastDayOfISOWeekYearPipe,
  LastDayOfMonthPipe,
  LastDayOfQuarterPipe,
  LastDayOfWeekPipe,
  LastDayOfYearPipe,
  LastDayOfDecadePipe,
  MaxPipe,
  MinPipe,
  StartOfDayPipe,
  StartOfHourPipe,
  StartOfISOWeekPipe,
  StartOfISOWeekYearPipe,
  StartOfMinutePipe,
  StartOfMonthPipe,
  StartOfQuarterPipe,
  StartOfSecondPipe,
  StartOfTodayPipe,
  StartOfTomorrowPipe,
  StartOfWeekPipe,
  StartOfYearPipe,
  StartOfYesterdayPipe,
  StartOfDecadePipe,
  StartOfWeekYearPipe,
  SubDaysPipe,
  SubHoursPipe,
  SubISOWeekYearsPipe,
  SubMillisecondsPipe,
  SubMinutesPipe,
  SubMonthsPipe,
  SubQuartersPipe,
  SubSecondsPipe,
  SubWeeksPipe,
  SubYearsPipe,
  IsAfterPipe,
  IsBeforePipe,
  IsDatePipe,
  IsEqualPipe,
  IsFuturePipe,
  IsPastPipe,
  IsValidPipe,
  IsTodayPipe,
  IsWeekendPipe,
  IsSameMonthPipe,
  ParsePipe,
  WeekdayNamePipe,
  IsSameYearPipe
];

@NgModule({
  imports: [CommonModule],
  declarations: PIPES,
  exports: PIPES
})
export class DateFnsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DateFnsModule,
      providers: [DateFnsConfigurationService]
    };
  }
}
