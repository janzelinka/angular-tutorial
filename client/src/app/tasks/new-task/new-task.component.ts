import { Component, EventEmitter, Output } from '@angular/core';
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

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  closeModal() {
    this.onCloseModal.emit();
  }
}
