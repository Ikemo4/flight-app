import { createFeatureSelector } from '@ngrx/store';
import { Flight } from '../flight.model';
 
export const selectFlights = createFeatureSelector<ReadonlyArray<Flight>>('flights');
