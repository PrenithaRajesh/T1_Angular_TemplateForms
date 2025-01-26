import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css'],
})
export class UserTabComponent implements OnInit, OnDestroy {
  selectedTab: 'user' | 'admin' = 'user';

  private subscription!: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subscription = this.userService.selectedUserType.subscribe((tab) => {
      this.selectedTab = tab;
    });
  }

  onTabChange(tab: 'user' | 'admin') {
    this.userService.selectedUserType.next(tab); 
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
