import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from '../core/api/index.constant';
import { AddTicket } from '../core/interface/Ticket';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient, private base: BaseService) { }

  //fs

  getTickets() {
    return this.http.get(`${baseUrl}/Ticket/getAllTicket`)
  }

  insertTicket(data: AddTicket) {
    return this.http.post(`${baseUrl}/Ticket`, data, { responseType: 'text' }).pipe(catchError(this.base.handleError));
  }
}
