import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from 'src/app/services/request-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singleuserdetail',
  templateUrl: './singleuserdetail.component.html',
  styleUrls: ['./singleuserdetail.component.css']
})
export class SingleuserdetailComponent implements OnInit {

  file: any = [];
  personId: any;
  constructor(private httpService: RequestServiceService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personId = this.route.snapshot.params['id'];
    this.getDetails(this.personId);
  }
  getDetails(personId: string) {
    this.httpService.getData(personId).subscribe((response: any) => {
      console.log('getUserList', response);
      this.file = response.data;
    }, (error) => {
      console.log('getUserList', error);
    });
  }

  goBack(link: any) {
    this.router.navigate([link]);
  }

}
