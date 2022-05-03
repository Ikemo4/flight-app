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

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    FilterDelaysPipe,
    FilterOnTimePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: FlightListComponent },
    ]),
    StoreModule.forRoot({ flights: flightsReducer }),
    //HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
