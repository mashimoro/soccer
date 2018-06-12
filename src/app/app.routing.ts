import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { EventViewComponent } from './soccer/event-view/event-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { SoccerMainComponent } from './soccer/soccer-main/soccer-main.component';

const printableComponents = [
  {
    path: 'eventView',
    component: EventViewComponent
  }


];

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SoccerMainComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'soccer-view',
        component: SoccerMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
