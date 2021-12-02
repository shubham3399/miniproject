import { HttpInterceptor } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { Router } from '@angular/router';
import { RequestServiceService } from './request-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector, private router:Router) { }
  intercept(req:any, next:any){
    let service = this.injector.get(RequestServiceService) 
    let tokenizedReq = req.clone({
      setHeaders:{
        'Authorization': `Bearer ${service.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
    }
}
