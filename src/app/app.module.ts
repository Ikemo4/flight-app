import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FilterDelaysPipe } from './flight-list/flight-list.component';
import { FilterOnTimePipe } from './flight-list/flight-list.component';

import { flightsReducer } from './state/flights.reducer';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    FilterDelaysPipe,
    FilterOnTimePipe,
    FlightDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: FlightListComponent },
    ]),
    StoreModule.forRoot({ flights: flightsReducer }),
    AppRoutingModule,
    //HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
