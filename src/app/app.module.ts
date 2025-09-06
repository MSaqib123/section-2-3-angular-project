//===================================
// ======= Class_3_to_5 =============
//===================================
//#region   Class_3_to_5
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Class_3_to_5/header/header.component';
import { UserComponent } from './Class_3_to_5/user/user.component';
import { TasksComponent } from './Class_3_to_5/tasks/tasks.component';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  //==== standalon component ====
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent],
})
export class AppModule {}

//injection tree
//this error comes because  when we work with module we use
// BrowserModule

//#endregion

//
//
//
//
//
//===================================
// ======= Class_6 =============
//===================================
