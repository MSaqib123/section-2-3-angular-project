import {
  Component,
  EventEmitter,
  inject,
  Output,
  Input,
  signal,
} from '@angular/core';
import { NewTask } from '../task.model';

//===================================
//=========== Directives ============
// Two Way binging using  FormModule Directives
//===================================
/*
  ************************ Example for 2 way binding ************************
  <p>  
    <label for="title">Title</label>
    <input type="text" id="title" name="title" [(ngModel)] ="inputTitle" />
  </p>
  <p>
    <label for="title">Title</label>
    <input type="text" id="title" name="title" [(ngModel)] ="inputTitle" />
  </p>
*/
import { FormsModule, RequiredValidator } from '@angular/forms';
import { TasksService } from '../task.servise';

@Component({
  selector: 'app-new-task',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  //===================================
  // =====  Injection
  //===================================
  // constructor(private tasksService: TasksService) {}
  private tasksService = inject(TasksService);

  @Input({ required: true }) userId!: string;
  @Output() hideTaskUI = new EventEmitter<void>();

  //==== Without Signals ========
  inputTitle = '';
  inputSummery = '';
  inputDate = '';

  //==== With Signals ========
  // inputTitle = signal('');
  // inputSummery = signal('');
  // inputDate = signal('');
  // sorry

  hideTask() {
    this.hideTaskUI.emit();
  }

  onSubmit() {
    this.tasksService.insertTask(
      {
        title: this.inputTitle,
        summery: this.inputSummery,
        date: this.inputDate,
      },
      this.userId
    );
    this.hideTaskUI.emit();
  }
}
