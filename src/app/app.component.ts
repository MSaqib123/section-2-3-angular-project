//===================================
// ======= Class_3_to_4 =============
//===================================
//#region   Class_3_to_4
// import { Component } from '@angular/core';
// import { NgFor, NgIf } from '@angular/common';

// import { HeaderComponent } from './Class_3_to_4/header/header.component';
// import { UserComponent } from './Class_3_to_4/user/user.component';
// import { TasksComponent } from './Class_3_to_4/tasks/tasks.component';
// import { DUMMY_USERS } from './dummy-users';

// @Component({
//   selector: 'app-root',
//   imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   users = DUMMY_USERS;
//   selectedUserId!: string;

//   get onSelectUserObj() {
//     return this.users.find((user) => user.id === this.selectedUserId)!;
//   }

//   onSelectUser(id: string) {
//     this.selectedUserId = id;
//   }
// }
//#endregion

//
//
//===================================
// ======= Class_3_to_5 =============
//===================================
//#region   Class_2_to_5
import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  //=========== disable the standalone component =========
  standalone: false,
  // imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
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
