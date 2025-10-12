import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less',
})
export class UserComponent {
  @Input({ required: true }) id!: string;

  @Input()
  avatar = '';

  @Input()
  userName = '';

  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // userName = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
