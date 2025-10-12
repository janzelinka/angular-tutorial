import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less',
})
export class UserComponent {
  // @Input()
  // avatar = '';

  // @Input()
  // userName = '';

  avatar = input.required<string>();
  userName = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar();
  }

  onSelectUser() {}
}
