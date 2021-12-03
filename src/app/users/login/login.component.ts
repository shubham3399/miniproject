import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from 'src/app/services/request-service.service';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/services/notify.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService: RequestServiceService, private router: Router, private notify: NotifyService) { }
  loginUserData: any = {

  };

  ngOnInit(): void {
  }

  verify() {
    this.httpService.userLogin(this.loginUserData).subscribe((Response: any) => {
      console.log(Response);
      localStorage.setItem('token', Response.token),
        setTimeout(
          () => {
            this.router.navigate(['/userlist'])
          }, 4000
        )
      this.notify.showSuccess("LoggedIn Successfully !!", "Notification")
    }, (error: any) => {
      console.log(error);
    }
    );
  }
}
