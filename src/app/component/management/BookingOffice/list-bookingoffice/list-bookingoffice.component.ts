import { Component, OnInit } from '@angular/core';
import { BookingOffice } from 'src/app/core/interface/BookingOffice';
import { BookingofficeService } from 'src/app/services/bookingoffice.service';
import { ToastMessage } from 'src/app/toast/toast.service';
@Component({
  selector: 'app-list-bookingoffice',
  templateUrl: './list-bookingoffice.component.html',
  styleUrls: ['./list-bookingoffice.component.css',
    '../../../../../assets/css/table.css']
})
export class ListBookingofficeComponent implements OnInit {

  bookingoffice: BookingOffice[] = []

  constructor(private bookinglotService: BookingofficeService, private toast:ToastMessage) { }

  ngOnInit(): void {
    this.bookinglotService.getBookingOffices().subscribe((data: any) => {
      this.bookingoffice = data;
    }, (error) => {
			this.toast.showError("Database connection error")
		})
  }

}
