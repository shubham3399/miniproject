import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from 'src/app/services/request-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private httpService:RequestServiceService) { 
    this.httpService.userName.subscribe(uname => {
      this.userName = uname;
    })
  }

  ngOnInit(): void {
  }
 userName:string = "John";
 updateUserName(uname: { value: string; }){
  this.httpService.userName.next(uname.value);
 }
}
