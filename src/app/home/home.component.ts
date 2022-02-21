import { Component, OnInit } from '@angular/core';
import { newserviceservice} from '../newservice.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todaydate;
  constructor(private newservice: newserviceservice) { }

  ngOnInit() {
    this.todaydate =  this.newservice.showTodayDate();
  }
  onClickSubmit(data){
    alert ("entered email id is:" + data.emailid)
  }   


}
