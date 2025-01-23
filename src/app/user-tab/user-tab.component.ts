import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-tab',
  standalone: true,
  imports: [],
  templateUrl: './user-tab.component.html',
  styleUrl: './user-tab.component.css'
})
export class UserTabComponent {
  selectedTab: "user" | "admin" = 'user';

  @Output() tabChange = new EventEmitter<"user" | "admin">();

  onTabChange(tab: "user" | "admin") {
    this.selectedTab = tab;
    console.log("Emitting tab: "+tab);
    this.tabChange.emit(tab);
  }
}
