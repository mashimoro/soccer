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
  MatMenuModule
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventViewComponent } from './soccer/event-view/event-view.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SoccerMainComponent } from './soccer/soccer-main/soccer-main.component';
import { BetslipComponent } from './soccer/betslip/betslip.component';
import { StoreService } from './store.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    DashboardComponent,
    EventViewComponent,
    SoccerMainComponent,
    BetslipComponent
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
    HttpClientModule,
    ReactiveFormsModule // <-- #2 add to @NgModule imports
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
