import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

let user:LoginComponent;
const routes:Routes=[
  {path:'app-root',component:AppComponent},
  {path:'registr',component:RegistrationUserComponent},
  {path:'login',component:LoginComponent},
  {path:'app-users',component:UsersComponent}]
  
@NgModule({
  declarations: [
    AppComponent,
    RegistrationUserComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
 FormsModule,
 RouterModule.forRoot(routes),
 HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
