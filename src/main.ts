// #region Class_3_to_4

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//===================================
// StandAlon component
//===================================

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

//===================================
// Module component
//===================================
platformBrowserDynamic().bootstrapModule(AppModule);

// #endregion
