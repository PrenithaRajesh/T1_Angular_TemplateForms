import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, Admin } from '../user-input.model';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent implements OnChanges {
  @Input({ required: true }) selectedForm: string = 'user';

  userInput!: User | Admin;

  constructor(private userService: UserService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedForm']) {
      this.initializeForm();
    }
  }

  private initializeForm(): void {
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
        modifiedAt: '',
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
        modifiedAt: '',
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

  get isUser(): User {
    return this.userInput as User;
  }

  get isAdmin(): Admin {
    return this.userInput as Admin;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.userService.validateUser(this.userInput)) {
      this.userService.createUser(this.userInput);
    } else {
      console.log('User validation failed');
    }
  }
}
