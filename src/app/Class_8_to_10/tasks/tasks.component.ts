import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task.model';
import { TasksService } from './task.servise';

@Component({
  selector: 'app-tasks',
  standalone: false,
  // imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) NameOfUser?: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  //***********************
  //#region
  // BAD
  // this is bad logic to add directly  instance of Service or Class
  // if in every compooent  we will used this that means  we  are creating  so many instance which is not good
  // so the data changing will not be relatected here
  //private tasksService = new TasksService();
  //#endregion

  //***********************

  //***********************
  // GOOD
  // for this we will used the  Dependency injaction
  // NOTE 1 ====
  // private tasksService: TasksService;
  // constructor(tasksService: TasksService) {
  //   this.tasksService = tasksService;
  // }
  // NOTE 2 ====
  // Step 1
  constructor(private tasksService: TasksService) {}
  // Step 2
  // add the   Injection  Decorator
  //***********************

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  showAddTask() {
    this.isAddingTask = true;
  }

  hideTaskUI() {
    this.isAddingTask = false;
  }
}
