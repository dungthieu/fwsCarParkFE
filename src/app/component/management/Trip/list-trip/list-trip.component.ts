import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/core/interface/Trip';
import { TripService } from 'src/app/services/trip.service';
import { ToastMessage } from 'src/app/toast/toast.service';
@Component({
  selector: 'app-list-trip',
  templateUrl: './list-trip.component.html',
  styleUrls: ['./list-trip.component.css',
    '../../../../../assets/css/table.css']
})
export class ListTripComponent implements OnInit {
  trips: Trip[] = [

  ]
  constructor(private tripService: TripService, private toast: ToastMessage) { }

  ngOnInit(): void {
    this.tripService.getTrips().subscribe((data: any) => {
      this.trips = data;
    }, (error) => {
      this.toast.showError("Database connection error")
    })
  }

}
