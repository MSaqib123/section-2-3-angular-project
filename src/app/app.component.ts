//===================================
// ======= Class_1_to_2 =============
//===================================
//#region   Class_1_to_2
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { HeaderComponent } from './Class_1_to_2/header/header.component';
import { UserComponent } from './Class_1_to_2/user/user.component';
import { TasksComponent } from './Class_1_to_2/tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

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
