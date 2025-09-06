import { Injectable } from '@angular/core';
import { NewTask, Task } from './task.model';

// ===================================
//  Step 2 add the   Injection  Decorator
// by adding this decoreator like this now  agnular is awar of  injection in where this service will be used
@Injectable({ providedIn: 'root' })
// ===================================
export class TasksService {
  /**
   *
   */
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  //we only allow the record in this service
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Prepare Master template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't5',
      userId: 'u2',
      title: 'Prepare Master template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't6',
      userId: 'u4',
      title: 'Prepare issue Master',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId == userId);
  }

  insertTask(task: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summery,
      dueDate: task.date,
    });

    this.saveTaskToLocal();
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTaskToLocal();
  }

  private saveTaskToLocal() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
