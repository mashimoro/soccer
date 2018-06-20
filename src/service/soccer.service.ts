import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { ApiClientService } from '../service/api-client.service';
// import { combineLatest } from 'rxjs/observable/combineLatest';
import { environment } from '../environments/environment';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DatePipe } from '@angular/common';
// import 'rxjs/add/operator/map';
// import { start } from 'repl';
import { StoreService } from './store.service';
import { Hero, heroes, dataSoccer, Soccer, user } from '../app/data-model';
import { Observable, of } from 'rxjs';
import { delay, tap, catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class SoccerService {

  listMarketP;
  listMarketPerformanceTable = [];
  delayMs = 500;
  listData = [];
  constructor(
    private apiClient: ApiClientService,
    private http: HttpClient,

    // private datePipe: DatePipe,
    // private store: StoreService
  ) { }


  getHeroes(): Observable<Hero[]> {
    return of(heroes).pipe(delay(this.delayMs)); // simulate latency with delay
  }
  getTestUser() {
    // http://localhost:7777/user
    // const path = ` ${environment.settradeApiUrl}/user`;
    const path = `http://localhost:7777/user`;
    return this.apiClient.getWithPath(path).pipe(
      tap()
    );

  }
  getScooerDate() {
    this.listData = this.mapDataTojson();
    this.listData = this.listData.filter(obj => obj.statisticsid !== undefined);
    return of(this.mapDataTojson()).pipe();
  }

  mapDataTojson() {
    const listSoccer = [];
    dataSoccer.forEach(obj => {
      // tslint:disable-next-line:no-unused-expression
      const dataSocc = new Soccer();
      dataSocc.matchid = obj[0];
      dataSocc.price_no = obj[1];
      dataSocc.league_code = obj[2];
      dataSocc.league_name = obj[3];
      dataSocc.team_home = obj[4];
      dataSocc.team_away = obj[5];
      dataSocc.play_dtstart = obj[6];
      dataSocc.time_play = obj[7];
      dataSocc.status_live = obj[8];
      dataSocc.score_home = obj[9];
      dataSocc.score_away = obj[10];
      dataSocc.home_red = obj[11];
      dataSocc.away_red = obj[12];
      dataSocc.full_hdp_code = obj[13];
      dataSocc.full_hdp_ball = obj[14];
      dataSocc.full_hdp_home = obj[15];
      dataSocc.full_hdp_away = obj[16];
      dataSocc.full_tor = obj[17];
      dataSocc.TeamTor = obj[18];
      dataSocc.full_goal_code = obj[19];
      dataSocc.full_goal_ball = obj[20];
      dataSocc.full_goal_over = obj[21];
      dataSocc.full_goal_under = obj[22];
      dataSocc.full_12_code = obj[23];
      dataSocc.full_12_home = obj[24];
      dataSocc.full_12_away = obj[25];
      dataSocc.full_12_draw = obj[26];
      dataSocc.half_hdp_code = obj[27];
      dataSocc.half_hdp_ball = obj[28];
      dataSocc.half_hdp_home = obj[29];
      dataSocc.half_hdp_away = obj[30];
      dataSocc.half_tor = obj[31];
      dataSocc.half_goal_code = obj[32];
      dataSocc.half_goal_ball = obj[33];
      dataSocc.half_goal_over = obj[34];
      dataSocc.half_goal_under = obj[35];
      dataSocc.half_12_code = obj[36];
      dataSocc.half_12_home = obj[37];
      dataSocc.half_12_away = obj[38];
      dataSocc.half_12_draw = obj[39];
      dataSocc.statisticsid = obj[40];

      listSoccer.push(dataSocc);

    });
    console.log('xx ---', listSoccer);
    return listSoccer;
  }

  groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  getSoccerByStatisticsid(statisticsid) {
    console.log(statisticsid, ' = getSoccerByStatisticsid');
    return this.listData.find(obj => obj.statisticsid === statisticsid);
  }
  getUser() {
    return user;
  }
}
