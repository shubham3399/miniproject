import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from 'src/app/services/request-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService:RequestServiceService, private router:Router) { }
  loginUserData:any = {
   
  };

  ngOnInit(): void {
  }

  
  verify(){
    this.httpService.userLogin(this.loginUserData).subscribe((Response:any)=>{
      console.log(Response);
      localStorage.setItem('token', Response.token),
      this.router.navigate(['/userlist'])
    },(error: any)=>{
      console.log(error);
    }
    );
  }
}
