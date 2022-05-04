import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../flight.model';
import { UpdateFlightService } from '../flight-list/flight-list.service';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {

  @Input() flight?: Flight;

  constructor(
    private route: ActivatedRoute,
    private flightService: UpdateFlightService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFlight()
  }

  getFlight(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.flightService.getFlight(id)
      .subscribe(flight => this.flight = flight);
  }

}
