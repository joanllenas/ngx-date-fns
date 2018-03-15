import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DateFnsModule } from '../lib';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DateFnsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
