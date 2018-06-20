import { Component, OnInit } from '@angular/core';
import { SoccerService } from 'src/service/soccer.service';
import { Hero, SoccerMath } from '../../data-model';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-soccer-main',
  templateUrl: './soccer-main.component.html',
  styleUrls: ['./soccer-main.component.css']
})
export class SoccerMainComponent implements OnInit {
  soccerForm: FormGroup;
  constructor(
    private soccerService: SoccerService,
    private fb: FormBuilder,
  ) { }
  listShow = [];
  listhero = [];
  user;
  // items
  ngOnInit() {
    this.createForm();
    this.user = this.soccerService.getUser();
    this.soccerService.getHeroes().subscribe(hero => {
      this.listhero = hero;
    });
  }
  createForm() {
    this.soccerForm = this.fb.group({
      name: '',
      items: this.fb.array([]),
      allPrice: ''
    });
  }
  changInSoccer(event) {
    this.listShow.push(event);
    console.log(this.listShow, 'event changInSoccer--', event.value);
  }
  addMath(event) {

    const data = this.soccerService.getSoccerByStatisticsid(event.statisticsid);
    console.log(data, 'event ', event.keyHdp);
    const soccerM = new SoccerMath();
    soccerM.id = event.statisticsid;
    soccerM.max_per = 0; // price_bet_soccer_new * stake  {{soc.team_away}}  vs   {{soc.play_dtstart}}
    soccerM.title_thome = data.team_away;
    soccerM.title_taway = data.play_dtstart;
    soccerM.spBall = 0;
    soccerM.price_bet_soccer = 0; //
    soccerM.price_bet_soccer_new = data[event.keySelect]; //
    soccerM.stake = 0;  //
    soccerM.lang_maxBet = 0;
    soccerM.lang_minBet = 0;
    soccerM.font_color = soccerM.price_bet_soccer < soccerM.price_bet_soccer_new ? 'red' : 'blue';

    // this.listhero.push(soccerM);

    this.items.push(this.fb.group(soccerM));
    console.log(this.items);

  }
  get items(): FormArray {
    return this.soccerForm.get('items') as FormArray;
  }
  onSubmit() {
    console.log('soccerForm', this.soccerForm.value);
  }
  onChange() {
    // this.soccerForm.get('max_per').setValue(this.soccerForm.get('stake').value * this.soccerForm.get('price_bet_soccer_new').value );
    const items = this.soccerForm.value.items;
    let all_per = 0;
    let all_stake = 0;
    // let lang_maxBet = this.user.lang_maxBet;
    items.map(item => {
      console.log(item.stake * item.price_bet_soccer_new);
      item.max_per = item.stake * item.price_bet_soccer_new;
      all_per = all_per + item.max_per;
      all_stake = all_stake + item.stake;

    });
    console.log(all_per + '-- soccerForm --', this.soccerForm.value);
    this.user.all_per = all_per;
    this.user.lang_minBet = this.user.lang_maxBet - all_stake;
  }
  onDelete(index) {
    console.log('index ---', index);
    this.items.removeAt(index);
    this.onChange();
  }

}
