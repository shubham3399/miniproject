import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleuserdetailComponent } from './singleuserdetail/singleuserdetail.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FilterPipe } from '../filter/filter.pipe';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';



@NgModule({
  declarations: [
    UsersComponent,
    LoginComponent,
    SignupComponent,
    UserListComponent,
    SingleuserdetailComponent,
    AdduserComponent,
    FilterPipe,
    Comp1Component,
    Comp2Component,
    Comp3Component,
  ],
  exports: [
   UsersComponent,
   SignupComponent,
   Comp1Component,
   Comp2Component,
   Comp3Component
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
