import { Component, OnInit } from '@angular/core';
import { ParkingLot } from 'src/app/core/interface/ParkingLot';
import { ParkinglotService } from 'src/app/services/parkinglot.service';
import { ToastMessage } from 'src/app/toast/toast.service';

@Component({
  selector: 'app-list-parkinglot',
  templateUrl: './list-parkinglot.component.html',
  styleUrls: ['./list-parkinglot.component.css',
    '../../../../../assets/css/table.css']
})
export class ListParkinglotComponent implements OnInit {

  constructor(private parkinglotService: ParkinglotService, private toast :ToastMessage) {

  }

  parkinglots: ParkingLot[] = []

  ngOnInit(): void {
    this.parkinglotService.getParkingLots().subscribe((data: any) => {
      this.parkinglots = data;
    }, (error) => {
			this.toast.showError("Database connection error")
		})
  }

}
