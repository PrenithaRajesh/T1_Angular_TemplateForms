import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent {

  selectedTab: "user" | "admin" = 'user';

  // @Output() tabChange = new EventEmitter<"user" | "admin">();

  constructor(private userService: UserService) {}

  onTabChange(tab: "user" | "admin") {
    this.selectedTab = tab;
    this.userService.selectedUser = tab;
    // this.tabChange.emit(tab);
  }

}
