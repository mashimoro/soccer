import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-betslip',
  templateUrl: './betslip.component.html',
  styleUrls: ['./betslip.component.css']
})
export class BetslipComponent implements OnInit {
  @Input() listShow;
  headerTradingComparePopu;
  constructor() {

    // tslint:disable-next-line:max-line-length
    this.headerTradingComparePopu = ['', 'No.', 'Symbol', 'Sector/Market', 'Value trade/day (M.Baht)', 'Volume trade/day (M.share)', 'Turnover ratio (%)', 'Price (Baht)', 'Mkt cap (M.Baht)', 'P/E'];

  }

  ngOnInit() {
  }

}
