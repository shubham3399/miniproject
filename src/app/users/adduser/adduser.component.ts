import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
@Input() selectedUser:any;
@Output() updateUserList = new EventEmitter<any>();

public data: any = {}
ngOnChanges(changes: SimpleChanges) {
  console.log('OnChanges',changes);
  console.log(JSON.stringify(changes));

  for (let propName in changes) {
       let change = changes[propName];
       this.data[propName] = change.currentValue
  }

  console.log('my data', this.data)
}

update(){
   let user = this.data.selectedUser ;
  this.updateUserList.emit(user);
 }


}
