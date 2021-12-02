import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { RequestServiceService } from '../services/request-service.service';

@Injectable({
  providedIn: 'root'
})
export class VerificationGuard implements CanActivate {
  constructor(private httpService:RequestServiceService, private router:Router){
  }
   canActivate():any{
     if(this.httpService.loggedIn()){
       return true;
     }else{
       this.router.navigate(['login'])
     }
   }
  
}
