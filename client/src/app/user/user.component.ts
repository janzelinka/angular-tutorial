import {
  Component,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';
import { IUser } from '../app.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less',
})
export class UserComponent {
  @Input({ required: true }) user?: IUser;

  select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user?.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user?.id ?? '');
  }
}
