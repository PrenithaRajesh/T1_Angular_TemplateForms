import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserInputComponent } from './user-input.component';
import { LoggerComponent } from './logger/logger.component'; 

@NgModule({
  declarations: [
    UserInputComponent,
    LoggerComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule, 
  ],
  exports: [
    UserInputComponent, 
  ],
})
export class UserInputModule {}
