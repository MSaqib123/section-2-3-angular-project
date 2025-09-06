import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],

  // we only exporet those component which are being used by other components
  exports: [TasksComponent],

  // BAD
  //imports: [SharedModule, DatePipe],

  // GOOD
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
