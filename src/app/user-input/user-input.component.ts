import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { User, Admin, UserOrAdmin } from '../user-input.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit, OnChanges {
  @Input() selectedForm: string = 'user'; // Default to 'user' form

  userInput!: UserOrAdmin;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Initialize the form based on the default selectedForm
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedForm'] && !changes['selectedForm'].firstChange) {
      // Reinitialize the form if selectedForm changes dynamically
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

  get asUser(){
    return this.userInput as User;
  }

  get asAdmin(){
    return this.userInput as Admin;
  }

  onSubmit(): void {
    if (this.userService.validateUser(this.userInput)) {
      this.userService.createUser(this.userInput);
      console.log('User successfully created:', this.userInput);
    } else {
      console.error('User validation failed:', this.userInput);
    }
  }
}
