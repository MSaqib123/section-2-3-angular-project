//===================================
// ======= Class_1_to_2 =============
//===================================
//#region   Class_1_to_2
import { Component } from '@angular/core';
import { HeaderComponent } from './Class_1/header/header.component';
import { UserComponent } from './Class_1/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './Class_1/tasks/tasks.component';

//===================================
//  Structrual Director   Older Anguelr
//===================================
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId!: string;

  get onSelectUserObj() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
//#endregion

//
//
//===================================
// ======= Class_3 =============
//===================================
