import { Component, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import * as publicApi from '../public-api';
import { AddDaysPipe } from './add-days.pipe';
import { DateFnsModule } from './date-fns.module';
import { FormatPipe, FormatPipeModule } from './format.pipe';

const exportsByName = new Map<string, unknown>(Object.entries(publicApi));
const exportNames = [...exportsByName.keys()];
const pipeNames = exportNames.filter(name => name.endsWith('Pipe'));
const pipeModuleNames = exportNames.filter(name => name.endsWith('PipeModule'));
const pipes = pipeNames.map(name => exportsByName.get(name) as Type<unknown>);

@Component({ standalone: true, template: '' })
class EmptyHostComponent {}

@Component({
  standalone: true,
  imports: [AddDaysPipe, FormatPipe],
  template: `
    {{ date | dfnsAddDays: 1 | dfnsFormat: 'yyyy-MM-dd' }}
  `
})
class DirectImportHostComponent {
  date = new Date(2017, 11, 31);
}

@Component({
  standalone: true,
  imports: [FormatPipeModule],
  template: `
    {{ date | dfnsFormat: 'yyyy-MM-dd' }}
  `
})
class DeprecatedModuleHostComponent {
  date = new Date(2017, 11, 31);
}

describe('Standalone pipes', () => {
  it('exports more than 100 pipes from the public API', () => {
    expect(pipes.length).toBeGreaterThan(100);
  });

  it('exports a standalone pipe for every deprecated pipe module', () => {
    const modulesWithoutPipe = pipeModuleNames.filter(
      moduleName => !exportsByName.has(moduleName.replace(/Module$/, ''))
    );
    expect(modulesWithoutPipe).toEqual([]);
  });

  it('can import every pipe directly in a standalone component', () => {
    TestBed.overrideComponent(EmptyHostComponent, { set: { imports: pipes } });
    expect(() => TestBed.createComponent(EmptyHostComponent)).not.toThrow();
  });

  it('renders pipes imported directly in a standalone component', () => {
    const fixture = TestBed.createComponent(DirectImportHostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent.trim()).toBe('2018-01-01');
  });

  it('renders a pipe imported through its deprecated module', () => {
    const fixture = TestBed.createComponent(DeprecatedModuleHostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent.trim()).toBe('2017-12-31');
  });
});

describe('DateFnsModule', () => {
  it('exports every pipe of the public API', () => {
    // Angular has no public API that lists the exports of an NgModule.
    const moduleExports: unknown[] = (DateFnsModule as any).ɵmod.exports;
    const missingPipes = pipeNames.filter(
      name => !moduleExports.includes(exportsByName.get(name))
    );
    expect(missingPipes).toEqual([]);
  });
});
