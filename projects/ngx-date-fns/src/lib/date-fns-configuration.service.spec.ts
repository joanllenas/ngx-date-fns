import { Component } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { DateFnsModule } from '.';
import * as esLocale from 'date-fns/locale/es/index.js';
import * as frLocale from 'date-fns/locale/fr/index.js';

@Component({
  template: `
    <p class="dfns">{{ date | dfnsFormat: 'ddd MMM D YYYY' }}</p>
    <p class="explicit">{{ date | dfnsFormat: 'ddd MMM D YYYY':options }}</p>
  `
})
class TestHostComponent {
  date: Date = new Date();
  options = { locale: frLocale };
}

describe('DateFnsConfigurationService', () => {
  const mockConfig = new DateFnsConfigurationService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [DateFnsModule.forRoot()],
      providers: [
        { provide: DateFnsConfigurationService, useValue: mockConfig }
      ]
    }).compileComponents();
  }));

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
    mockConfig.setLocale(esLocale);
    component.date = new Date(2017, 11, 31);
    element = fixture.nativeElement.querySelector('.dfns');
    fixture.detectChanges();
    expect(element.textContent).toBe('dom dic 31 2017');
  });

  it('should display French date even when changing config locale to Spanish if locale has been explicitly set via options', () => {
    mockConfig.setLocale(esLocale);
    component.date = new Date(2017, 11, 31);
    element = fixture.nativeElement.querySelector('.explicit');
    fixture.detectChanges();
    expect(element.textContent).toBe('dim. déc. 31 2017');
  });
});
