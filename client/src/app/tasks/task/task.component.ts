import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../tasks.component';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
