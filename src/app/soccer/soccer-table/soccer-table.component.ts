import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SoccerService } from '../../../service/soccer.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-soccer-table',
  templateUrl: './soccer-table.component.html',
  styleUrls: ['./soccer-table.component.css']
})
export class SoccerTableComponent implements OnInit {
  @Output() emittersend: EventEmitter<any> = new EventEmitter();
  listHero = [];
  listUser;
  listSoccer;
  headers = [
    'Time', 'Event', 'HDP', 'Home', 'Away', 'Goal', 'Over', 'Under', 'HDP', 'Home', 'Away'
    , 'Goal', 'Over', 'Under'];
  constructor(
    private soccerService: SoccerService,
    private datePipe:  DatePipe,
  ) { }

  ngOnInit() {

    this.soccerService.getTestUser().subscribe(soccer => {
      this.listUser = soccer.json();
      console.log(' listUser --', this.listUser);
    }, err => {
      console.log(err);
    });
    this.soccerService.getScooerDate().subscribe(succer => {
      this.listSoccer = succer;
    });

  }
  send_main(statisticsid, keySelect, keyHdp) {
    const send = { statisticsid: statisticsid, keySelect: keySelect , keyHdp : keyHdp };
    this.emittersend.emit(send);
  }

}
