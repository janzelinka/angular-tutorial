import {
  Component,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';
import { IUser } from '../app.component';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.less',
})
export class UserComponent {
  @Input({ required: true }) user?: IUser;
  @Input({ required: true }) selected!: boolean;

  select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user?.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user?.id ?? '');
  }
}
