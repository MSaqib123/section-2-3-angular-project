import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../task.model';
import { CardComponent } from '../../shared/card/card.component';

//===================================
//  Date Pipes  for Customer Formates
// https://angular.dev/api/common/DatePipe#usage-notes
//===================================
import { DatePipe } from '@angular/common';
import { TasksService } from '../task.servise';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() selectedTaskId = new EventEmitter<string>();

  //===================================
  // =====  Injection
  //===================================
  private tasksService = inject(TasksService);

  CompleteTask() {
    //this.selectedTaskId.emit(this.task.id);
    this.tasksService.deleteTask(this.task.id)
  }
}
