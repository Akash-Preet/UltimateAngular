import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `<div>
    <button (click)="goBack()">&lsaquo; Go back</button>
    <passenger-form [detail]="passenger" (update)="onUdatePassenger($event)">
    </passenger-form>
  </div>`,
})
export class PassengerViewerComponent implements OnInit {
  passenger?: Passenger;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService
  ) {}
  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((data: Passenger) =>
          this.passengerService.getPassenger(data.id)
        )
      )
      .subscribe((data: Passenger) => (this.passenger = data));
  }

  onUdatePassenger(newPassenger: Passenger) {
    this.passengerService
      .updatePassenger(newPassenger)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, newPassenger);
      });
  }
  goBack() {
    this.router.navigate(['/passengers']);
  }
}
