import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DateFnsModule } from './modules/date-fns/date-fns.module';


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
