import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchFlightForm } from './SearchFlightForm';
import { FlightService } from '../../flights/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  privileges = ['Economy', 'Business'];
  today = new Date();
  halfYear = new Date(this.today.getTime() + 180 * 24 * 60 * 60 * 1000);
  minDate = this.today;
  maxDate = this.halfYear;
  flights;

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const searchForm = form.value as SearchFlightForm;
    this.flightService.clearState();
    this.flightService.getFlights();
    // this.flights = this.flightService.getRoute(searchForm);
    // this.router.navigate(['flights']);
    console.log(this.flights);
  }
}
