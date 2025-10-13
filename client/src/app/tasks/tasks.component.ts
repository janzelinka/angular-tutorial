import { Component, Input } from '@angular/core';
import { IUser } from '../app.component';
import { TaskComponent } from './task/task.component';
import { INewTask, NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

export interface ITask {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.less',
})
export class TasksComponent {
  @Input() selectedUser?: IUser;

  isAddTaskVisible = false;

  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.selectedUser?.id!);
  }

  onCompleteTask(taskId: string) {
    this.taskService.removeTask(taskId);
  }

  showTaskWindow() {
    this.isAddTaskVisible = true;
  }

  hideTaskWindow() {
    this.isAddTaskVisible = false;
  }

  onAddTask(task: INewTask) {
    this.taskService.addTask(task, this.selectedUser?.id!);

    this.hideTaskWindow();
  }
}
