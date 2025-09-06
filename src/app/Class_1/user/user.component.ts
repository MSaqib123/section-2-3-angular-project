import { Component, computed, EventEmitter } from '@angular/core';
import {DUMMY_USERS} from '../../dummy-users';
import { signal } from '@angular/core';

//====== Decorator Base paramters =======
import { Input } from '@angular/core';
import { Output } from '@angular/core';

//====== Signle Base paramters =======
import { input } from '@angular/core';
import { output } from '@angular/core';

//====== Customer Model =========
import { User } from './User.model';
import { CardComponent } from "../shared/card/card.component";


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
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // ===================================
  // NOTE  Advance Type_Script  lang concept
  // ===================================
  // @Input({required:true}) avatar! : string;
  // @Input({required:true}) name! : string;
  // @Input({required:true}) id! : string;
  

  // ===================================
  // NOTE Advane Type_Script Type Illisass Way
  // ===================================
  // @Input({required:true}) user!:{
  //   id:string,
  //   avatar:string,
  //   name:string;
  // }
  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter<string>();
  

  get ImagePath(){
    return "assets/users/" + this.user.avatar;
  };

  ChangeUser(){
    this.select.emit(this.user.id);
  }

  // ===================================
  // NOTE 2 signla Base parameters
  // ===================================

  

}
