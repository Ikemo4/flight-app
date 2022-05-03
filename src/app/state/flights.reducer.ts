import { createReducer, on } from '@ngrx/store';

import { retrievedFlightList } from './flights.actions';
import { Flight } from '../flight.model';

export const initialState: ReadonlyArray<Flight> = [];

export const flightsReducer = createReducer(
  initialState,
  on(retrievedFlightList, (state, { flights }) => flights)
);