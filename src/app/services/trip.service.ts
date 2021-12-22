import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from '../core/api/index.constant';
import { AddTrip } from '../core/interface/Trip';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(
    private http: HttpClient,
    private base:BaseService
    ) { }

  //fs

  getTrips(){
    return this.http.get(`${baseUrl}/Trip/getAllTrip`)
  }

  insertTrip(data:AddTrip){
    return this.http.post(`${baseUrl}/Trip`, data,{ responseType: 'text' }).pipe(catchError(this.base.handleError));
  }
}
