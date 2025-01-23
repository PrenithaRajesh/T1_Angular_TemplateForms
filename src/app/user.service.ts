import { Injectable } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { UserOrAdmin } from './user-input.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  users: UserOrAdmin[] = DUMMY_USERS;

  selectedUser: "user" | "admin" = 'user';

  createUser(user: UserOrAdmin) {
    this.users.push(user);
  }

  readUser() {
    return this.users;
  }

  updateUser(user: UserOrAdmin) {
    this.users = this.users.map((u) => (u.id === user.id ? user : u));
  }

  deleteUser(user: UserOrAdmin) {
    this.users = this.users.filter((u) => u.id !== user.id);
  }


    //   TODO: ADD LOGIC FOR FORM VALIDATION 
  validateUser(user: UserOrAdmin) {
    return true;
  }
}
