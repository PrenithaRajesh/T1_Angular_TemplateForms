import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UserOrAdmin } from './user-input.model';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserTableComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: UserOrAdmin[] = DUMMY_USERS;

  onFormSubmit(user: UserOrAdmin) {
    console.log(user);
    this.users.push(user);
  }
}
