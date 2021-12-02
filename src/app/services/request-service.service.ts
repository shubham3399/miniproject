import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {
  static getToken() {
    throw new Error('Method not implemented.');
  }
  getloginUserData(loginUserData: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  private url = "https://reqres.in/api/";

  userName = new Subject<any>();

  getUsers(){
    return this.http.get(this.url + "users?page=2");
  }
  createUser(data:any){
    return this.http.post(this.url + "users",data);
  }
  getData(id:string){
    return this.http.get(this.url + "users/" + id );
  }
  updateDetails(id:any){
    return this.http.put(this.url + "users/" + id, id);
  }
  userLogin(user:any){
    return this.http.post(this.url + "login",user)
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
}