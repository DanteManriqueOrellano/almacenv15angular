import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenucrudingeso',
  templateUrl: './submenucrudingeso.component.html',
  styleUrls: ['./submenucrudingeso.component.css']
})
export class SubmenucrudingesoComponent  {
  defaultElevation = 2;
  raisedElevation = 8;

  titles = ['title1', 'title2', 'title3'];
  titleSelected:any;

  name = 'Angular';

  select(title:any) {
    this.titleSelected = title;
  }

}
