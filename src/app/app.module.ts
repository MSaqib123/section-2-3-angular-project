//===================================
// ======= Class_3_to_6 =============
//===================================
//#region   Class_3_to_6
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { HeaderComponent } from './Class_3_to_5/header/header.component';
// import { UserComponent } from './Class_3_to_5/user/user.component';
// import { TasksComponent } from './Class_3_to_5/tasks/tasks.component';

// @NgModule({
//   declarations: [AppComponent],
//   bootstrap: [AppComponent],
//   //==== standalon component ====
//   imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent],
// })
// export class AppModule {}

// //injection tree
// //this error comes because  when we work with module we use
// // BrowserModule

//#endregion

//
//
//
//
//
//===================================
// ======= Class_7_ =============
//===================================
//#region   Class_7_

// ************************
// A First Summary
// 1. Non-standalon component undestanding

// Note
// we know now we can add    non-standalon component in  modules   and standAlon component     to  app.module
// but we can also add  modules in    standAlon components  also   Example : (NewTask -> formModule)
// ************************

// this

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Class_3_to_6/header/header.component';
import { UserComponent } from './Class_3_to_6/user/user.component';
import { TasksComponent } from './Class_3_to_6/tasks/tasks.component';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent],
})
export class AppModule {}

//#endregion
