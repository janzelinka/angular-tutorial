import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TaskComponent } from './tasks/task/task.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    UserComponent,
    NewTaskComponent,
    TaskComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, DatePipe, SharedModule],
})
export class AppModule {}
