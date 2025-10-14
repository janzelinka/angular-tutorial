import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

export interface IUser {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'client';

  users: IUser[] = DUMMY_USERS;
  selectedUser?: IUser;

  onSelectUser(userId: string) {
    this.selectedUser = this.users.find((user) => user.id === userId);
  }
}
