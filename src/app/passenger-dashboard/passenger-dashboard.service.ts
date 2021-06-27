import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Passenger } from './models/passenger.interface';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {
    console.log(http);
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_API);
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http.get<Passenger>(`${PASSENGER_API}/${id}`);
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(
      `${PASSENGER_API}/${passenger.id}`,
      passenger
    );
  }

  deletePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.delete<Passenger>(`${PASSENGER_API}/${passenger.id}`);
  }
}
