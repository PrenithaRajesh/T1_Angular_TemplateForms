import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  constructor(private userService: UserService) {}
  users = this.userService.readUser();
}
