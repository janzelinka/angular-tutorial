import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

export interface INewTask {
  dueDate: string;
  summary: string;
  title: string;
}

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.less',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() onCloseModal = new EventEmitter();
  @Output() add = new EventEmitter<INewTask>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  private tasksService = inject(TasksService);

  closeModal() {
    this.onCloseModal.emit();
  }

  handleSubmit() {
    // console.log(this.enteredTitle(), this.enteredSummary(), this.enteredDate());
    // this.add.emit({
    //   dueDate: this.enteredDate(),
    //   summary: this.enteredSummary(),
    //   title: this.enteredTitle(),
    // });
    this.tasksService.addTask(
      {
        dueDate: this.enteredDate(),
        summary: this.enteredSummary(),
        title: this.enteredTitle(),
      },
      this.userId
    );
  }
}
