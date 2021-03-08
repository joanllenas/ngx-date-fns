import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import fr from 'date-fns/esm/locale/fr';
import { MainComponent } from './pages/main/main.component';
import { StrategyDefaultComponent } from './pages/default/default.component';
import { TestStrategyDefaultComponent } from './pages/default/test-default.component';
import { DateFnsModule, DateFnsConfigurationService } from 'ngx-date-fns';

const frenchConfig = new DateFnsConfigurationService();
frenchConfig.setLocale(fr);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StrategyDefaultComponent,
    TestStrategyDefaultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    DateFnsModule.forRoot()
  ],
  providers: [{ provide: DateFnsConfigurationService, useValue: frenchConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {}
