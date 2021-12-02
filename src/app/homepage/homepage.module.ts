import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  exports: [
    HomepageComponent
   ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
  ]
  
})
export class HomepageModule { }
