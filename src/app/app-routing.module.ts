import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'users', loadChildren: () => 
    import('./users/users.module').then(m => m.UsersModule)
   },
   { 
    path: 'homepage', loadChildren: () => 
    import('./homepage/homepage.module').then(m => m.HomepageModule)
   },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
