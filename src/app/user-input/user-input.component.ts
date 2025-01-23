import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, Admin } from '../user-input.model';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Input({required: true}) selectedForm: string = 'user';

  constructor(private userService: UserService) {}

  userInput: User | Admin = this.selectedForm === 'user' ? {
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
  }: {
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

  get isUser() : User{
    return this.userInput as User;
  }

  get isAdmin() : Admin{
    return this.userInput as Admin;
  }

  onSubmit(event: Event) {
    // event.preventDefault(): Stops the form's default action (reloading the page).
    // event.stopPropagation(): Ensures the event doesn't propagate to parent elements.
    event.preventDefault(); 
    event.stopPropagation();
    if(this.userService.validateUser(this.userInput)){
      this.userService.createUser(this.userInput);
    }
    // TODO: ADD STYLE TO SHOW ERROR MESSAGE
    else{
      console.log("User validation failed");
    }
  }
}
