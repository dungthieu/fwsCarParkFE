import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { baseUrl } from '../core/api/index.constant';
import { Car } from '../core/interface/Car';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private http: HttpClient,
    private base: BaseService
  ) { }

  // funtion
  getCars() {
    return this.http.get(`${baseUrl}/Car/getAllCar`)
  }

  addNewCar(data: Car) {
    return this.http.post(`${baseUrl}/Car`, data, { responseType: 'text' }).pipe(catchError(this.base.handleError));
  }

}
