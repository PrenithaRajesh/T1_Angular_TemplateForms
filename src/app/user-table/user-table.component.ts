import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, Admin, UserOrAdmin } from '../user-input.model';
@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  @Input() users!: UserOrAdmin[];
}
