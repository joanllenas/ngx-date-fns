import { LastDayOfWeekPipe } from './last-day-of-week.pipe';
import { ChangeDetectorRef } from '@angular/core';
import { DateFnsConfigurationService } from './date-fns-configuration.service';

// Mock Change Detector
const MyChangeDetector = class extends ChangeDetectorRef {
  markForCheck(): void {
    throw new Error('Method not implemented.');
  }
  detach(): void {
    throw new Error('Method not implemented.');
  }
  detectChanges(): void {
    throw new Error('Method not implemented.');
  }
  checkNoChanges(): void {
    throw new Error('Method not implemented.');
  }
  reattach(): void {
    throw new Error('Method not implemented.');
  }
};

describe('LastDayOfWeekPipe', () => {
  let pipe: LastDayOfWeekPipe;

  beforeEach(
    () =>
      (pipe = new LastDayOfWeekPipe(
        new DateFnsConfigurationService(),
        new MyChangeDetector()
      ))
  );

  it('should return the last day of a week for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date)).toEqual(new Date(2014, 8, 6, 0, 0, 0, 0));
  });

  it('should return the last day of a week for 2 September 2014 11:55:00 if the week starts on Monday', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date, { weekStartsOn: 1 })).toEqual(
      new Date(2014, 8, 7, 0, 0, 0, 0)
    );
  });
});
