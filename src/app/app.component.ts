import { Component } from '@angular/core';
import { newserviceservice } from './newservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public persondata = [];
  title = 'MyApp';
  days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
  isavailable = true;
  onClickFunction(event){
    alert("click event");
    console.log(event);
  }
  selectdays(event){
      alert("dropdown changed");
      console.log(event);
    }
  todaydate;
  constructor(private newservice:newserviceservice)  {}
    ngOnInit() {
      this.todaydate = this.newservice.showTodayDate(); 
      this.newservice.getData().subscribe((data)=> {
        this.persondata = Array.from(Object.keys(data), k=>data[k]);
        // console.log(this.persondata);
        
      });
    }


    
}
