import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { User, Admin, UserOrAdmin } from '../user-input.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit, OnChanges {
  @Input() selectedForm: string = 'user'; 

  userInput!: UserOrAdmin;

  formLogs : {
    condition: boolean;
    message: string;
  }[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.initializeForm();
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
