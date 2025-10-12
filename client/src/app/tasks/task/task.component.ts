import { Component, Input } from '@angular/core';
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
}
