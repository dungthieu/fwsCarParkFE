import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from '../core/api/index.constant';
import { ParkingLot } from '../core/interface/ParkingLot';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ParkinglotService {

  constructor(
    private http: HttpClient,
    private base : BaseService
    ) { }

  //fs

  getParkingLots(){
    return this.http.get(`${baseUrl}/ParkingLot/getAllParkingLot`)
  }

  insertParkingLot(data:ParkingLot){
    return this.http.post(`${baseUrl}/ParkingLot/addParkingLot`, data,{ responseType: 'text' }).pipe(catchError(this.base.handleError));
  }

}
