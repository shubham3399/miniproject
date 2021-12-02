import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
{
  path:'',
  component:HomepageComponent
},
{
  path: 'homepage', 
  component: HomepageComponent,
  data: { animation: 'homepage' } 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
