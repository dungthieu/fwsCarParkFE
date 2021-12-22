import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditBookingOffice } from 'src/app/core/interface/BookingOffice';
import { PipeComponent } from 'src/app/pipe/pipe';
import { BookingofficeService } from 'src/app/services/bookingoffice.service';
import { TripService } from 'src/app/services/trip.service';
import { ToastMessage } from 'src/app/toast/toast.service';

@Component({
  selector: 'app-add-bookingoffice',
  templateUrl: './add-bookingoffice.component.html',
  styleUrls: ['../../../../../assets/css/index.css',
    './add-bookingoffice.component.css'
  ]
})
export class AddBookingofficeComponent implements OnInit {

  public isShowRequired: boolean = false;
  public bookingoffice: EditBookingOffice = ({} as any) as EditBookingOffice;
  public trips: any
  public isValidateDate: boolean = false

  constructor(
    private router: Router,
    private bookingOfficeService: BookingofficeService,
    private tripService: TripService,
    private toast: ToastMessage,
    private pipe: PipeComponent

  ) { }
  places = ["Quầy số 1", "Quầy số 2", "Quầy số 3"]

  ngOnInit(): void {
    this.isShowRequired = false
    this.tripService.getTrips().subscribe((data: any) => {
      this.trips = data;
    })
  }


  addBookingOffice(data: any) {
    this.isShowRequired = true
    this.validate(data.value)
    if (data.valid && this.validate(data.value)) {
      this.convertDate(data.value)

      this.bookingOfficeService.insertBookingOffice(data.value).subscribe(
        (data: any) => {
          this.toast.showSuccess("Add booking office successfully!")
          this.backToList()
        },
        (error) => {
          this.toast.showError(" Wrong format of price")
        }
      );
    }
  }

  clearRequired() {
    this.isShowRequired = false
  }
  validate(data: any) {
    this.isValidateDate = this.pipe.validateDate(data.fromdate) &&  this.pipe.validateDate(data.todate);

    return this.isValidateDate
  }

  backToList() {
    this.router.navigate(['carpark-manager/bookingoffice/list-bookingoffice'])
  }

  convertDate(data: any) {
    data.fromdate = this.pipe.convertDate(data.fromdate)
    data.todate = this.pipe.convertDate(data.todate)
  }

}
