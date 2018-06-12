
import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
// tslint:disable-next-line:no-unused-expression

export class EventViewComponent implements OnInit, OnChanges {

  @Output() listSelect = new EventEmitter();
  tradingForm: FormGroup;
  tradings = [
    {
      securitySymbol: 'BBL1',
      sectorName: 'BBL1',
      marketName: 'Mll',
      avgTradingValue: 12,
      avgTradingVolume: 12,
      turnoverRatio: 12,
      priceClose: 12,
      marketCap: 12,
      pe: 12,
      inputCkeck: false
    },
    {
      securitySymbol: 'BBL2',
      sectorName: 'BBL2',
      marketName: 'Mll',
      avgTradingValue: 12,
      avgTradingVolume: 12,
      turnoverRatio: 12,
      priceClose: 12,
      marketCap: 12,
      pe: 12,
      inputCkeck: false
    },
    {
      securitySymbol: 'BBL3',
      sectorName: 'BBL',
      marketName: 'Mll',
      avgTradingValue: 12,
      avgTradingVolume: 12,
      turnoverRatio: 12,
      priceClose: 12,
      marketCap: 12,
      pe: 12,
      inputCkeck: false
    }
  ];
  headerTradingComparePopu = [];
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
    this.rebuildForm();
  }
  ngOnChanges() {
    console.log('XXXXX');
    //   this.rebuildForm();
  }
  createForm() {
    this.tradingForm = this.fb.group({
      items: this.fb.array([]),
    });
  }
  rebuildForm() {
    // tslint:disable-next-line:max-line-length
    this.headerTradingComparePopu = ['', 'No.', 'Symbol', 'Sector/Market', 'Value trade/day (M.Baht)', 'Volume trade/day (M.share)', 'Turnover ratio (%)', 'Price (Baht)', 'Mkt cap (M.Baht)', 'P/E'];

    this.tradingForm.reset({

    });
    const listChild = [];
    this.tradings.map(add => {
      const ad = add;
      listChild.push(ad);
    });
    // console.log(this.addresses, ' -- Address ', listChild);
    this.setChilds(listChild);
  }
  setChilds(listChild: any[]) {
    const childs = listChild.map(obj => this.fb.group(obj));
    const listFormArray = this.fb.array(childs);
    this.tradingForm.setControl('items', listFormArray);
  }
  get items(): FormArray {
    return this.tradingForm.get('items') as FormArray;
  }
  addLair() {
    const newObj = {
      securitySymbol: 'BBL',
      sectorName: 'BBL',
      marketName: 'Mll',
      avgTradingValue: 12,
      avgTradingVolume: 12,
      turnoverRatio: 12,
      priceClose: 12,
      marketCap: 12,
      pe: 12,
      inputCkeck: true
    };
    this.items.push(this.fb.group(newObj));
    // this.items.push(this.fb.group(new Address()));
  }
  getValue(i, name) {
    return this.tradingForm.value['items'][i][name];
  }
  changeValue(id, event) {
    // console.log(id, 'change Value', event.target.checked, this.tradingForm.value);
    const trading = this.tradingForm.value;
    const securitySymbol = this.getValue(id, 'securitySymbol');
    const list = [];
    list.push(...trading.items);
    const sendObj = list.find(obj => obj.securitySymbol === securitySymbol);
    sendObj['inputCkeck'] = event.target.checked;
    // console.log('List == ', sendObj);
    this.listSelect.emit(sendObj);
  }
}
