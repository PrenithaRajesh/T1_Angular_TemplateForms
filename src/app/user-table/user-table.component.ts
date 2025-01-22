import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  users = DUMMY_USERS;
}
