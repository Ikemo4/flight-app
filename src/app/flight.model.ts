export interface Flight {
    id: number;
    flightNumber: string;
    origin: string;
    destination: string;
    departureTime: string;
    departureDate: string;
    timeToDepart: number;
    gate: number;
    status: string;
}