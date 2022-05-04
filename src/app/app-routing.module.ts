import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'flights', pathMatch: 'full' },
  { path: 'flights', component: FlightListComponent },
  { path: 'detail/:id', component: FlightDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
