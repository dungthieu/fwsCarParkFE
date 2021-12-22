import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddTrip } from 'src/app/core/interface/Trip';
import { PipeComponent } from 'src/app/pipe/pipe';
import { TripService } from 'src/app/services/trip.service';
import { ToastMessage } from 'src/app/toast/toast.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['../../../../../assets/css/index.css',
    './add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  constructor(
    private router: Router,
    private tripService: TripService,
    private toast: ToastMessage,
    private pipe: PipeComponent
  ) { }

  public isShowRequired: boolean = false;
  public isValidateTime: boolean = false;
  public isValidateDate: boolean = false;

  public trip: AddTrip = ({} as any) as AddTrip;

  ngOnInit(): void {
    this.trip.ticketNumber = "0"
    this.isShowRequired = false
  }

  addNewTrip(data: any) {
    this.isShowRequired = true
    let validate = this.validate(data.value)

    if (data.valid && validate) {
      data.value.departureDateTime = this.pipe.addDateTime(data.value.departureDate, data.value.departureTime)

      this.tripService.insertTrip(data.value).subscribe(
        (data: any) => {
          this.toast.showSuccess("Add trip successfully!")
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
    this.isValidateDate = this.pipe.validateDate(data.departureDate)
    this.isValidateTime  =this.pipe.validateTime(data.departureTime)
    return  this.isValidateDate && this.isValidateTime 
  }

  backToList() {
    this.router.navigate(['carpark-manager/trip/list-trip'])
  }

}
