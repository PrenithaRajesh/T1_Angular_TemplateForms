import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { User, Admin, UserOrAdmin } from '../user-input.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit, OnChanges {
  @Input() selectedForm!: 'user' | 'admin';

  userInput!: UserOrAdmin;

  formLogs : {
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

    // Subscribe to the selectedUser observable to pre-populate the form
    this.userService.selectedUser.subscribe((user: UserOrAdmin) => {
      if(!user) return;
      if(user.type === this.selectedForm) this.userInput = { ...user }; 
       else {
        this.selectedForm = user.type;
        this.userInput = { ...user };
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedForm'] && !changes['selectedForm'].firstChange) {
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

  get asUser(){
    return this.userInput as User;
  }

  get asAdmin(){
    return this.userInput as Admin;
  }

  onSubmit(): void {
    this.formLogs = this.userService.validateUser(this.userInput);
    if (this.formLogs.length === 0) {
      this.userService.createUser(this.userInput);
      alert(this.userInput.type+' created successfully');
    } else {
      console.log('Form validation failed');
      console.log(this.formLogs);
    }
  }
}
