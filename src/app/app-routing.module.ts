import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FlightListComponent } from './flight-list/flight-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'flights', pathMatch: 'full' },
  { path: 'flights', component: FlightListComponent }
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
