import { Injectable } from '@angular/core';
 
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flight } from '../flight.model';
import { FLIGHTS } from '../flights';
 


@Injectable({ providedIn: 'root' })
export class UpdateFlightService {
  constructor() {}
 
  // getFlights(): Observable<Array<Flight>> {
  //   const flights = from([FLIGHTS]);
  //   return flights;
  // }

  getFlights(): Observable<Flight[]> {
    const flights = of(FLIGHTS);
    return flights;
  }

  getFlight(id: number): Observable<Flight> {
    const flight = FLIGHTS.find(f => f.id === id)!;
    return of(flight);
  }

  filterFlights(filter?: string): Observable<Flight[]> {
    return of(FLIGHTS).pipe(
      map(f => {
        if (!filter) {
          return f;
        }

        const filteredFlights: Flight[] = [];

        f.filter( (flight) => {
          if (flight.status.toLowerCase().includes(filter.toLowerCase())) {
            filteredFlights.push(flight);
          }
        });

        return filteredFlights;
      })
    )
  }
}

//Need to modify this class to update your flights every minute with pre-determined values rather than thru a google api