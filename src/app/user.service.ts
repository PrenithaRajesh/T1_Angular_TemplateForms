import { Injectable } from '@angular/core';
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
  users: UserOrAdmin[] = DUMMY_USERS;

  selectedUser: 'user' | 'admin' = 'user';

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

  validateUser(user: UserOrAdmin): {condition: boolean; message: string;}[] {
    var flag = true;

    var returnArray: {condition: boolean; message: string;}[] = [];

    if (this.selectedUser === 'user') {
      if (!isValidUserId(user.id)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid User ID',
        });
      }
      if (!isValidName(user.name)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid Name',
        });
      }
      if (!isValidEmail(user.email)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid Email',
        });
      }
      if (!isValidPhone(user.phone)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid Phone',
        });
      }
      if (!isValidGender(user.gender)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid Gender',
        });
      }
      if (!isValidDateOfBirth(user.dateOfBirth)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid Date of Birth',
        });
      }
      if (!isValidAddress(user.address)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid Address',
        });
      }
      if (!isValidUserType((user as User).userType)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid User Type',
        });
      }
      if (!user.agreeToTerms) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Please agree to terms',
        });
      }
    } else if (this.selectedUser === 'admin') {
      if (!isValidAdminId(user.id)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid Admin ID',
        });
      }
      if (!isValidName(user.name)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid Name',
        });
      }
      if (!isValidEmail(user.email)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid Email',
        });
      }
      if (!isValidPhone(user.phone)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid Phone',
        });
      }
      if (!isValidGender(user.gender)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid Gender',
        });
      }
      if (!isValidDateOfBirth(user.dateOfBirth)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid Date of Birth',
        });
      }
      if (!isValidAddress(user.address)) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Invalid Address',
        });
      }
      if (!user.agreeToTerms) {
        flag = false;
        returnArray.push( {
          condition: false,
          message: 'Please agree to terms',
        });
      }
    } 
    else {
      returnArray.push( {
        condition: false,
        message: 'Invalid Form Type',
      });
    }

    return returnArray;
  }
}
