import { Flight } from '../flight.model'

export interface AppState {
    flights: ReadonlyArray<Flight>;
}