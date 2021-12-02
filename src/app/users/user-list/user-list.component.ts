import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from 'src/app/services/request-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdduserComponent } from '../adduser/adduser.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any = [];
  constructor(private httpService: RequestServiceService, public routes: ActivatedRoute, public routers: Router) { }

  ngOnInit(): void {
    this.getUserList();
  }
  filteredString: string = ''; //Default value

  getUserList() {
    this.httpService.getUsers().subscribe((response: any) => {
      console.log('getUserList', response);
      this.userList = response.data
    }, (error) => {
      console.log('getUserList', error);
    });
  }

  reDirect(link: string, id: string) {
    if (id === '') {
      this.routers.navigate([link]);
    } else {
      this.routers.navigate([link + '/' + id])
    }

  }
  selectedUser: any;
  selectUser(user: any) {
    this.selectedUser = user;
  }

  updateValue(data: any) {
    console.log('event', data);
    //Storing change value in Array 
    let foundIndex = this.userList.findIndex((element: { id: any; }) =>
      element.id === data.id
    )
    console.log("Changes", this.userList.splice(foundIndex, 1, data));
    //Splice indicating starting index and number of elements to remove 
    this.userList.splice(foundIndex, 1, data)
  }


}
