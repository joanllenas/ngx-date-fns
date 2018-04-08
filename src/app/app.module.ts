import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DateFnsModule } from '../lib';
import { AppComponent } from './app.component';
import { DateFnsConfigurationService } from '../lib/src/date-fns-configuration.service';
import * as frLocale from "date-fns/locale/fr/index.js";

const frenchConfig = new DateFnsConfigurationService();
frenchConfig.setLocale(frLocale);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DateFnsModule.forRoot()
  ],
  providers: [ { provide: DateFnsConfigurationService, useValue: frenchConfig } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
