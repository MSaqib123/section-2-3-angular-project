import { Component, computed, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { signal } from '@angular/core';

//====== Decorator Base paramters =======
import { Input } from '@angular/core';
import { Output } from '@angular/core';

//====== Signle Base paramters =======
import { input } from '@angular/core';
import { output } from '@angular/core';

//====== Customer Model =========
import { User } from './User.model';

// ===================================
// NOTE Advane Type_Script Type Illisass Way
// ===================================
// type User={
//     id:string,
//     avatar:string,
//     name:string;
// }

// ===================================
// NOTE Advane Type_Script Type Illisass Way
// ===================================
// interface User{
//     id:string,
//     avatar:string,
//     name:string;
// }

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get ImagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  ChangeUser() {
    this.select.emit(this.user.id);
  }

  // ===================================
  // NOTE 2 signla Base parameters
  // ===================================
}
