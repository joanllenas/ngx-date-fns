import { Component, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import * as publicApi from '../public-api';
import { AddDaysPipe } from './add-days.pipe';
import { DateFnsModule } from './date-fns.module';
import { FormatPipe } from './format.pipe';

const exportsByName = new Map<string, unknown>(Object.entries(publicApi));
const exportNames = [...exportsByName.keys()];
const pipeNames = exportNames.filter(name => name.endsWith('Pipe'));
const pipes = pipeNames.map(name => exportsByName.get(name) as Type<unknown>);

// Angular has no public API that returns the name of a pipe class.
const templateNameOf = (pipe: Type<unknown>): string =>
  (pipe as any).ɵpipe.name;

@Component({ template: '' })
class EmptyHostComponent {}

@Component({
  imports: [AddDaysPipe, FormatPipe],
  template: ` {{ date | dfnsAddDays: 1 | dfnsFormat: 'yyyy-MM-dd' }} `
})
class DirectImportHostComponent {
  date = new Date(2017, 11, 31);
}

describe('Standalone pipes', () => {
  it('exports more than 100 pipes from the public API', () => {
    expect(pipes.length).toBeGreaterThan(100);
  });

  it('does not export per-pipe modules from the public API', () => {
    const pipeModuleNames = exportNames.filter(name =>
      name.endsWith('PipeModule')
    );
    expect(pipeModuleNames).toEqual([]);
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
});

describe('DateFnsModule', () => {
  it('exports every pipe of the public API', () => {
    // The AOT build removes the export list of the module. An override makes
    // TestBed compile the module again in JIT mode, with the export list.
    TestBed.overrideModule(DateFnsModule, {});
    // createComponent throws NG0302 for a pipe that the module does not export.
    const template = pipes
      .map(pipe => `{{ null | ${templateNameOf(pipe)} }}`)
      .join('\n');
    TestBed.overrideComponent(EmptyHostComponent, {
      set: { imports: [DateFnsModule], template }
    });
    expect(() => TestBed.createComponent(EmptyHostComponent)).not.toThrow();
  });
});
