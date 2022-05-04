import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Flight } from '../flight.model';
// import { FLIGHTS } from '../flights';
import { UpdateFlightService } from './flight-list.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights: Flight[] = [];
  filterField: string = '';
  filterResults: Observable<Flight[]> = of([]);
  // selectedFlight?: Flight;
  
  // onSelect(flight: Flight): void {
  //   this.selectedFlight = flight;
  // }

  getFlights(): void {
    this.flightService.getFlights()
      .subscribe(flights => this.flights = flights);
  }

  changeFlights(): void {
    this.flights.forEach(flight => {
      (flight.status == 'Delayed') ? flight.status = 'On Time' : flight.status = 'Delayed'
    });

    this.getFlights();
  }

  constructor(private flightService: UpdateFlightService) { }

  ngOnInit(): void {
    this.getFlights();

    setInterval( () => {
      this.changeFlights();
    }, 60*1000);

  }

}

@Pipe({
  name: 'filterDelays',
  pure: false
})

export class FilterDelaysPipe implements PipeTransform {
  constructor(private flightService: UpdateFlightService) {}

  transform(values: any[]): Observable<Flight[]> {
    return this.flightService.filterFlights('Delayed');
  }

}

@Pipe({
  name: 'filterOnTime',
  pure: false
})

export class FilterOnTimePipe implements PipeTransform {
  constructor(private flightService: UpdateFlightService) {}

  transform(values: any[]): Observable<Flight[]> {
    return this.flightService.filterFlights('On Time');
  }

}