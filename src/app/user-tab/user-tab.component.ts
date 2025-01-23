import { Component } from '@angular/core';

@Component({
  selector: 'app-user-tab',
  standalone: true,
  imports: [],
  templateUrl: './user-tab.component.html',
  styleUrl: './user-tab.component.css'
})
export class UserTabComponent {
  selectedTab: string = 'user';
}
