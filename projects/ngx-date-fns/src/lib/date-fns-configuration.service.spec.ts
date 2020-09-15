import { Component } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import {
  DateFnsConfigurationService,
  DateFnsConfiguration
} from './date-fns-configuration.service';
import { DateFnsModule } from './date-fns.module';
import { es, fr } from 'date-fns/locale';

@Component({
  template: `
    <p class="dfns">{{ date | dfnsFormat: 'EEE MMM d yyyy' }}</p>
    <p class="explicit">{{ date | dfnsFormat: 'EEE MMM d yyyy':options }}</p>
  `
})
class TestHostComponent {
  date: Date = new Date();
  options = { locale: fr };
}

describe('DateFnsConfigurationService', () => {
  let mockConfig: DateFnsConfiguration;

  beforeEach(
    waitForAsync(() => {
      mockConfig = new DateFnsConfigurationService();
      TestBed.configureTestingModule({
        declarations: [TestHostComponent],
        imports: [DateFnsModule.forRoot()],
        providers: [
          { provide: DateFnsConfigurationService, useValue: mockConfig }
        ]
      }).compileComponents();
    })
  );

  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display English date by default', () => {
    component.date = new Date(2017, 11, 31);
    element = fixture.nativeElement.querySelector('.dfns');
    fixture.detectChanges();
    expect(element.textContent).toBe('Sun Dec 31 2017');
  });

  it('should display Spanish date when changing config locale to Spanish', () => {
    mockConfig.setLocale(es);
    component.date = new Date(2017, 11, 31);
    element = fixture.nativeElement.querySelector('.dfns');
    fixture.detectChanges();
    expect(element.textContent).toBe('dom dic 31 2017');
  });

  it('should display French date even when changing config locale to Spanish if locale has been explicitly set via options', () => {
    mockConfig.setLocale(es);
    component.date = new Date(2017, 11, 31);
    element = fixture.nativeElement.querySelector('.explicit');
    fixture.detectChanges();
    expect(element.textContent).toBe('dim. déc. 31 2017');
  });
});
