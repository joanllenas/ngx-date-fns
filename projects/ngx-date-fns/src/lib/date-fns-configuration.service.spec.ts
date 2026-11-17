import { Component, NgModule, signal } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import {
  DateFnsConfigurationService,
  DateFnsConfiguration
} from './date-fns-configuration.service';
import { DateFnsModule } from './date-fns.module';
import { es, fr } from 'date-fns/locale';

@Component({
  template: `
    <p class="dfns">{{ date() | dfnsFormat: 'EEE MMM d yyyy' }}</p>
    <p class="explicit">
      {{ date() | dfnsFormat: 'EEE MMM d yyyy' : options }}
    </p>
  `,
  standalone: false
})
class TestHostComponent {
  date = signal(new Date());
  options = { locale: fr };
}

// AOT compilation needs the declaration in an NgModule, not only in TestBed.
@NgModule({
  declarations: [TestHostComponent],
  imports: [DateFnsModule.forRoot()]
})
class TestHostModule {}

describe('DateFnsConfigurationService', () => {
  let mockConfig: DateFnsConfiguration;

  beforeEach(async () => {
    mockConfig = new DateFnsConfigurationService();
    await TestBed.configureTestingModule({
      imports: [TestHostModule],
      providers: [
        { provide: DateFnsConfigurationService, useValue: mockConfig }
      ]
    }).compileComponents();
  });

  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display English date by default', () => {
    component.date.set(new Date(2017, 11, 31));
    element = fixture.nativeElement.querySelector('.dfns');
    fixture.detectChanges();
    expect(element.textContent?.trim()).toBe('Sun Dec 31 2017');
  });

  it('should display Spanish date when changing config locale to Spanish', () => {
    mockConfig.setLocale(es);
    component.date.set(new Date(2017, 11, 31));
    element = fixture.nativeElement.querySelector('.dfns');
    fixture.detectChanges();
    expect(element.textContent?.trim()).toBe('dom dic 31 2017');
  });

  it('should display French date even when changing config locale to Spanish if locale has been explicitly set via options', () => {
    mockConfig.setLocale(es);
    component.date.set(new Date(2017, 11, 31));
    element = fixture.nativeElement.querySelector('.explicit');
    fixture.detectChanges();
    expect(element.textContent?.trim()).toBe('dim. déc. 31 2017');
  });
});
