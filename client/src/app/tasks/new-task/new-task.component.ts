import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.less',
})
export class NewTaskComponent {
  @Output() onCloseModal = new EventEmitter();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  closeModal() {
    this.onCloseModal.emit();
  }
}
