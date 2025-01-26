import { Component, OnInit } from '@angular/core';
import { User, Admin, UserOrAdmin } from '../user-input.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  selectedForm!: 'user' | 'admin';

  userInput!: UserOrAdmin;

  isEditUser = false;

  formLogs: {
    condition: boolean;
    message: string;
  }[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.initializeForm();

    this.userService.selectedUserType.subscribe((type: 'user' | 'admin') => {
      this.selectedForm = type;
      this.initializeForm();
    });

    this.userService.selectedUser.subscribe((user: UserOrAdmin) => {
      this.isEditUser = !!user;
      if (!user) return;
      if (user.type === this.selectedForm) this.userInput = { ...user };
      else {
        this.selectedForm = user.type;
        this.userInput = { ...user };
      }
    });
  }

  private initializeForm(): void {
    this.isEditUser = false;
    if (this.selectedForm === 'user') {
      this.userInput = {
        id: '',
        name: '',
        email: '',
        phone: '',
        gender: '',
        dateOfBirth: '',
        address: {
          street: '',
          city: '',
          state: '',
          zip: '',
        },
        type: 'user',
        userType: '',
        preferredLanguage: {
          english: false,
          hindi: false,
          kannada: false,
          tamil: false,
        },
        agreeToTerms: false,
      };
    } else {
      this.userInput = {
        id: '',
        name: '',
        email: '',
        phone: '',
        gender: '',
        dateOfBirth: '',
        address: {
          street: '',
          city: '',
          state: '',
          zip: '',
        },
        type: 'admin',
        permissions: {
          read: false,
          write: false,
          edit: false,
          delete: false,
        },
        adminNotes: '',
        agreeToTerms: false,
      };
    }
  }

  private resetFormFields(): void {
    const formElements = document.querySelectorAll('input:not(.buttons input), select, textarea');
    formElements.forEach((element) => {
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        element.value = '';
      }
      if (element instanceof HTMLSelectElement) {
        element.selectedIndex = 0;
      }
    });
  }
  
  get asUser() {
    return this.userInput as User;
  }

  get asAdmin() {
    return this.userInput as Admin;
  }

  onSubmit(): void {
    this.formLogs = this.userService.validateUser(this.userInput);
    if (this.formLogs.length === 0) {
      if (this.isEditUser) {
        this.userService.updateUser(this.userInput);
        alert(this.userInput.type + ' updated successfully');
      }
      else{
      this.userService.createUser(this.userInput);
      alert(this.userInput.type + ' created successfully');
      }
      this.initializeForm();
      this.resetFormFields();
    } else {
      console.log('Form validation failed');
      // console.log(this.formLogs);
    }
  }
}
