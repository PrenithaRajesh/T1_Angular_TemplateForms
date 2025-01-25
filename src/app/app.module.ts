import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserTabComponent } from './user-tab/user-tab.component';

import { UserInputModule } from './user-input/user-input.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserTableComponent,
    UserTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
