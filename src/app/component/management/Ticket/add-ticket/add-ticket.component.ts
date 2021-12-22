import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddTicket } from 'src/app/core/interface/Ticket';
import { PipeComponent } from 'src/app/pipe/pipe';
import { CarService } from 'src/app/services/car.service';
import { TicketService } from 'src/app/services/ticket.service';
import { TripService } from 'src/app/services/trip.service';
import { ToastMessage } from 'src/app/toast/toast.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['../../../../../assets/css/index.css']
})
export class AddTicketComponent implements OnInit {

  constructor(
    private carService: CarService,
    private tripService: TripService,
    private toast: ToastMessage,
    private router: Router,
    private ticketService: TicketService,
    private pipe: PipeComponent

  ) { }

  public isShowRequired: Boolean = false
  public ticket: AddTicket = ({} as any) as AddTicket;
  public car: any
  public trip: any
  public isValidateTime: boolean = false;
  ngOnInit(): void {
    this.isShowRequired = false
    this.carService.getCars().subscribe((data: any) => {
      this.car = data;
      console.log(data);
    })
    this.tripService.getTrips().subscribe((data: any) => {
      this.trip = data;
      console.log(data);

    })
  }

  clearRequired() {
    this.isShowRequired = false
  }

  addTicket(data: any) {
    this.isShowRequired = true
    let validate = this.validate(data.value)

    if (data.valid && validate) {
      this.ticketService.insertTicket(data.value).subscribe(
        (data: any) => {
          this.toast.showSuccess("Add Ticket successfully!")
          this.backToList()
        },
        (error) => {
          this.toast.showError(" Please input area with number format")
        }
      );
    }
  }

  validate(data: any) {
    this.isValidateTime  =this.pipe.validateTime(data.bookingTime)
    console.log(this.isValidateTime);
    
    return  this.isValidateTime 
  }
  backToList() {
    this.router.navigate(['carpark-manager/ticket/list-ticket'])
  }

}
