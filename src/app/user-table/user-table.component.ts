import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { UserOrAdmin } from '../user-input.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent {
  constructor(private userService: UserService) {}
  users = this.userService.readUser();

  onSelectRow(user: UserOrAdmin) {
    console.log(user);
    this.userService.selectedUser.next(user);
  }
}
