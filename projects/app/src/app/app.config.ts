import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { fr } from 'date-fns/locale';

const frenchConfig = new DateFnsConfigurationService();
frenchConfig.setLocale(fr);

export const appConfig: ApplicationConfig = {
  providers: [
    // Angular 21 apps are zoneless by default. Keep the zone.js change
    // detection that the demo app used before Angular 21.
    provideZoneChangeDetection(),
    provideRouter(routes),
    { provide: DateFnsConfigurationService, useValue: frenchConfig }
  ]
};
