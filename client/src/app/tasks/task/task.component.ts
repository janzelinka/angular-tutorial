import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../tasks.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.less',
})
export class TaskComponent {
  @Input() task?: ITask;

  @Output() completeTask: EventEmitter<string> = new EventEmitter<string>();

  onCompleteTask() {
    this.completeTask.emit(this.task?.id);
  }
}
