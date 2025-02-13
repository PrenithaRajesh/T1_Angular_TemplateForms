import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DUMMY_USERS } from './dummy-users';
import { User, UserOrAdmin } from './user-input.model';

import {
  isValidAddress,
  isValidAdminId,
  isValidDateOfBirth,
  isValidEmail,
  isValidGender,
  isValidName,
  isValidPhone,
  isValidUserId,
  isValidUserType,
} from './form-validation';

@Injectable({ providedIn: 'root' })
export class UserService {
  users = new BehaviorSubject<UserOrAdmin[]>(localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users') || '') : DUMMY_USERS);

  selectedUserType = new BehaviorSubject<'user' | 'admin'>('user');

  selectedUser = new Subject<UserOrAdmin>();

  constructor() {
    // Automatically update selectedUserType when selectedUser changes
    this.selectedUser.subscribe((user) => {
      if ('userType' in user) {
        this.selectedUserType.next('user');
      } else {
        this.selectedUserType.next('admin');
      }
    });
  }

  createUser(user: UserOrAdmin) {
    const currentUsers = this.users.value;
    this.users.next([...currentUsers, user]);
    localStorage.setItem('users', JSON.stringify(this.users.value));
  }

  readUser() {
    return this.users;
  }

  updateUser(user: UserOrAdmin) {
    const currentUsers = this.users.value;
    const userIndex = currentUsers.findIndex((u) => u.id === user.id);

    if (userIndex !== -1) {
      currentUsers[userIndex] = user; 
      this.users.next([...currentUsers]); 
    }
    
    localStorage.setItem('users', JSON.stringify(this.users.value));
  }

  deleteUser(user: UserOrAdmin) {
    const currentUsers = this.users.value;
    const updatedUsers = currentUsers.filter((u) => u.id !== user.id);
    this.users.next(updatedUsers); 
    localStorage.setItem('users', JSON.stringify(this.users.value));
  }

  validateUser(user: UserOrAdmin): { condition: boolean; message: string }[] {
    var flag = true;
    var returnArray: { condition: boolean; message: string }[] = [];

    const selectedType = this.selectedUserType.value;
    if (selectedType === 'user') {
      if (!isValidUserId(user.id)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid User ID',
        });
      }
      if (!isValidName(user.name)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid Name',
        });
      }
      if (!isValidEmail(user.email)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid Email',
        });
      }
      if (!isValidPhone(user.phone)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid Phone',
        });
      }
      if (!isValidGender(user.gender)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid Gender',
        });
      }
      if (!isValidDateOfBirth(user.dateOfBirth)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid Date of Birth',
        });
      }
      if (!isValidAddress(user.address)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid Address',
        });
      }
      if (!isValidUserType((user as User).userType)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid User Type',
        });
      }
      if (!user.agreeToTerms) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Please agree to terms',
        });
      }
    } else if (selectedType === 'admin') {
      if (!isValidAdminId(user.id)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid Admin ID',
        });
      }
      if (!isValidName(user.name)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid Name',
        });
      }
      if (!isValidEmail(user.email)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid Email',
        });
      }
      if (!isValidPhone(user.phone)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid Phone',
        });
      }
      if (!isValidGender(user.gender)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid Gender',
        });
      }
      if (!isValidDateOfBirth(user.dateOfBirth)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid Date of Birth',
        });
      }
      if (!isValidAddress(user.address)) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Invalid Address',
        });
      }
      if (!user.agreeToTerms) {
        flag = false;
        returnArray.push({
          condition: false,
          message: 'Please agree to terms',
        });
      }
    } else {
      returnArray.push({
        condition: false,
        message: 'Invalid Form Type',
      });
    }

    return returnArray;
  }
}
