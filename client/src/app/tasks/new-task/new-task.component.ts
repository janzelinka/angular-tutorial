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
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.less',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() onCloseModal = new EventEmitter();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  private tasksService = inject(TasksService);

  closeModal() {
    this.onCloseModal.emit();
  }

  handleSubmit() {
    this.tasksService.addTask(
      {
        dueDate: this.enteredDate(),
        summary: this.enteredSummary(),
        title: this.enteredTitle(),
      },
      this.userId
    );
    this.closeModal();
  }
}
