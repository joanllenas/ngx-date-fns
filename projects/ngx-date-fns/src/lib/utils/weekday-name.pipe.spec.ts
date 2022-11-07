import { ChangeDetectorRef } from '@angular/core';
import { DateFnsConfigurationService } from '../date-fns-configuration.service';
import { WeekdayNamePipe } from './weekday-name.pipe';
import { es } from 'date-fns/locale';

describe('WeekdayName', () => {
  let pipe: WeekdayNamePipe;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
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
    pipe = new WeekdayNamePipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    );
  });

  it('should display S', () => {
    expect(pipe.transform(0, 'x1')).toBe('S');
  });
  it('should display Su', () => {
    expect(pipe.transform(0, 'x2')).toBe('Su');
  });
  it('should display Sun', () => {
    expect(pipe.transform(0, 'x3')).toBe('Sun');
  });
  it('should display Sunday', () => {
    expect(pipe.transform(0)).toBe('Sunday');
  });
  it('should display lunes', () => {
    expect(pipe.transform(0, 'full', { locale: es })).toBe('lunes');
  });
});
