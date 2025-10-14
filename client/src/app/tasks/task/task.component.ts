import { Component, Input } from '@angular/core';
import { ITask } from '../tasks.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.less',
})
export class TaskComponent {
  @Input() task?: ITask;

  constructor(private tasksService: TasksService) {}

  onCompleteTask() {
    this.tasksService.removeTask(this.task?.id!);
  }
}
