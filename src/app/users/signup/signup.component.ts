import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { RequestServiceService } from 'src/app/services/request-service.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.pattern('[1-9$@_a-zA-Z ]*'),Validators.minLength(8)]),
    mobilenumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    country: new FormControl('India'),
    exampleRadios: new FormControl(''),
    interest : new FormControl('')
  })

  constructor(private httpService:RequestServiceService, public route:ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.createUser();
  }

  onSubmit(){
    console.log(this.signup.value);
  }

  
 createUser(){
  console.log('Create User');
  if(this.signup.valid){
    let data={
      "id":2,
      "email":this.signup.value.email,
      "first_name":this.signup.value.firstname,
      "last_name":this.signup.value.lastname,
      "number":this.signup.value.number,
      "country":this.signup.value.country,
      "gender":this.signup.value.exampleRadios  
    }
    this.httpService.createUser(data).subscribe((Response:any)=>{
      console.log('CreateUser',Response);
      setTimeout(
        ()=> {
         this.router.navigate(['login'])
        },2000
       )
    },(error)=>{
      console.log('CreateUser',error);
    }
    );
  }
 }
}
