import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from 'src/app/services/request-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private httpService:RequestServiceService) { 
    this.httpService.userName.subscribe(uname => {
      this.userName = uname;
    })
  }

  ngOnInit(): void {
  }
  userName:string = "John";
}
