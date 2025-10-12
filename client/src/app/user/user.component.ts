import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less',
})
export class UserComponent {
  @Input()
  avatar = '';

  @Input()
  userName = '';

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {}
}
