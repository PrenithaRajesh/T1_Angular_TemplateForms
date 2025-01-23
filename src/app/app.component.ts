import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UserOrAdmin } from './user-input.model';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserTableComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private userService: UserService) {}
}
