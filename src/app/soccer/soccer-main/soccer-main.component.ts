import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soccer-main',
  templateUrl: './soccer-main.component.html',
  styleUrls: ['./soccer-main.component.css']
})
export class SoccerMainComponent implements OnInit {

  constructor() { }
  listShow = [];
  ngOnInit() {
  }
  changInSoccer(event) {
 
    this.listShow.push(event);
    console.log(this.listShow, 'event changInSoccer--', event.value);
  }

}
