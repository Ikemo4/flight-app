import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {

  @Input() flight?: Flight;

  constructor() { }

  ngOnInit(): void {
  }

}
