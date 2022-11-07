import { ParsePipe } from './parse.pipe';
import { ParsePurePipe } from './parse.pure.pipe';
import { es } from 'date-fns/locale';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { ChangeDetectorRef } from '@angular/core';

describe('ParsePipe', () => {
  let pipe: ParsePipe;

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
    pipe = new ParsePipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    );
  });

  it('should parse 11 February 2014 from middle-endian format', () => {
    expect(pipe.transform('02/11/2014', 'MM/dd/yyyy', new Date())).toEqual(
      new Date(2014, 1, 11)
    );
  });

  it('should parse 28th of February in Spanish locale in the context of 2010 year', () => {
    expect(
      pipe.transform('28 de Febrero', `do 'de' MMMM`, new Date(2010, 0, 1), {
        locale: es
      })
    ).toEqual(new Date(2010, 1, 28));
  });
});

describe('ParsePipe Pure', () => {
  it('should parse 11 February 2014 from middle-endian format', () => {
    const pipe = new ParsePurePipe(new DateFnsConfigurationService());
    expect(pipe.transform('02/11/2014', 'MM/dd/yyyy', new Date())).toEqual(
      new Date(2014, 1, 11)
    );
  });

  it('should parse 28th of February in Spanish locale in the context of 2010 year, when locale provided via config', () => {
    const config = new DateFnsConfigurationService();
    config.setLocale(es);
    const pipe = new ParsePurePipe(config);
    expect(
      pipe.transform('28 de Febrero', `do 'de' MMMM`, new Date(2010, 0, 1))
    ).toEqual(new Date(2010, 1, 28));
  });
});
