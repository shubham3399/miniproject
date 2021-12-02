import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificationGuard } from '../guards/verification.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SingleuserdetailComponent } from './singleuserdetail/singleuserdetail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';
import { Comp1Component } from './comp1/comp1.component';

const routes: Routes = [
  {
   path:'',
   component:UsersComponent
  },
  { 
    path: 'signup', 
    component: SignupComponent,
    data: { animation: 'signup' } 
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'login' }
  },
  {
    path: 'userlist',
    component: UserListComponent,
    canActivate: [VerificationGuard]
  },
  {
   path:'view/:id',
   component:SingleuserdetailComponent
  },
  {
    path: 'component',
    component:Comp1Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
