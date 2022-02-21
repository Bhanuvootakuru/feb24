import { Component, OnInit } from '@angular/core';
import { newserviceservice } from '../newservice.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  todaydate;
  constructor(private newservice:newserviceservice)  {}
    ngOnInit() {
      this.todaydate = this.newservice.showTodayDate();
}
}
