import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UserService } from './user.service';
import { UserTabComponent } from "./user-tab/user-tab.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserTableComponent, UserInputComponent, UserTabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private userService: UserService) {}

  get selectedUser(){
    return this.userService.selectedUser;
  }
}
