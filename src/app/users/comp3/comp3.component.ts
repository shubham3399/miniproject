import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from 'src/app/services/request-service.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

 
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
