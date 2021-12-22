import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { baseUrl } from '../core/api/index.constant';
import { EditBookingOffice } from '../core/interface/BookingOffice';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BookingofficeService {

  constructor(
    private http: HttpClient,
    private base:BaseService
    ) { }

  //function
  getBookingOffices(){
    return this.http.get(`${baseUrl}/BookingOffice/getAllBooking`)
  }

  insertBookingOffice(bookingOffice:EditBookingOffice){
    return this.http.post(`${baseUrl}/BookingOffice/createBookingOffice`, bookingOffice,{ responseType: 'text' }).pipe(catchError(this.base.handleError));
  }

}
