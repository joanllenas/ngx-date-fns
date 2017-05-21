import { NgModule } from '@angular/core';

import { DistanceInWordsPipe } from './distance-in-words.pipe';

const PIPES = [
  DistanceInWordsPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class DateFnsModule { }
