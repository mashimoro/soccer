import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigatorComponent } from './navigator/navigator.component';
import { LayoutModule } from '@angular/cdk/layout';

// Routing Module
import { AppRoutingModule } from '../app/app.routing';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatGridListModule, MatCardModule,
  MatMenuModule, MatInputModule
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventViewComponent } from './soccer/event-view/event-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SoccerMainComponent } from './soccer/soccer-main/soccer-main.component';
import { BetslipComponent } from './soccer/betslip/betslip.component';
import { StoreService } from './store.service';
import { SoccerTableComponent } from './soccer/soccer-table/soccer-table.component';
import { SoccerService } from '../service/soccer.service';
import { ApiClientService } from 'src/service/api-client.service';
import { HttpModule } from '@angular/http';
import { AuthService } from 'src/service/auth.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    DashboardComponent,
    EventViewComponent,
    SoccerMainComponent,
    BetslipComponent,
    SoccerTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule, // <-- #2 add to @NgModule imports
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule

  ]
  ,
  providers: [
    StoreService,
    SoccerService,
    ApiClientService,
    AuthService,
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
