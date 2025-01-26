  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { UserService } from '../user.service';
  import { UserOrAdmin } from '../user-input.model';

  @Component({
    selector: 'app-user-table',
    templateUrl: './user-table.component.html',
    styleUrls: ['./user-table.component.css'],
  })
  export class UserTableComponent implements OnInit {
    constructor(private userService: UserService) {}
    users: UserOrAdmin[]= [];
    
    ngOnInit(){
      this.userService.readUser().subscribe((users) => {
      this.users = users;
    });
  }

    onSelectRow(user: UserOrAdmin) {
      console.log(user);
      this.userService.selectedUser.next(user);
    }

    onDeleteRow(user: UserOrAdmin, event: Event) {
      event.stopPropagation();
      console.log(user);
      const isConfirmed = confirm(`Are you sure you want to delete ${user.name}?`);
      
      isConfirmed?this.userService.deleteUser(user):null;
    }
  }
