import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  @Output() onCloseModal = new EventEmitter();
  @Output() add = new EventEmitter<INewTask>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  closeModal() {
    this.onCloseModal.emit();
  }

  handleSubmit() {
    console.log(this.enteredTitle(), this.enteredSummary(), this.enteredDate());
    this.add.emit({
      dueDate: this.enteredDate(),
      summary: this.enteredSummary(),
      title: this.enteredTitle(),
    });
  }
}
