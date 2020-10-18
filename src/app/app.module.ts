import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { fr } from 'date-fns/locale';
import { MainComponent } from './pages/main/main.component';
import { StrategyOnPushComponent } from './pages/on-push/on-push.component';
import { TestOnPushComponent } from './pages/on-push/test-onpush.component';
import { StrategyDefaultComponent } from './pages/default/default.component';
import { TestStrategyDefaultComponent } from './pages/default/test-default.component';
import { DateFnsModule, DateFnsConfigurationService } from 'ngx-date-fns';

const frenchConfig = new DateFnsConfigurationService();
frenchConfig.setLocale(fr);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StrategyOnPushComponent,
    TestOnPushComponent,
    StrategyDefaultComponent,
    TestStrategyDefaultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    DateFnsModule.forRoot()
  ],
  providers: [{ provide: DateFnsConfigurationService, useValue: frenchConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {}
