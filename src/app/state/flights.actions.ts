import { createAction, props } from '@ngrx/store';
import { Flight } from '../flight.model';
 
export const addFlight = createAction(
  '[Flight List] Add Flight',
  props<{ flightId: string }>()
);
 
export const removeFlight = createAction(
  '[Flight Collection] Remove Flight',
  props<{ flightId: string }>()
);

export const retrievedFlightList = createAction(
  '[Flight List] Retrieve Flights Success',
  props<{ flights: ReadonlyArray<Flight> }>()
);