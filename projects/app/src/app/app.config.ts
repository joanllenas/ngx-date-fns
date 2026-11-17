import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { fr } from 'date-fns/locale';

const frenchConfig = new DateFnsConfigurationService();
frenchConfig.setLocale(fr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: DateFnsConfigurationService, useValue: frenchConfig }
  ]
};
