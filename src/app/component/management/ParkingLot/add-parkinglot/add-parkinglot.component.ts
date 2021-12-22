import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParkingLot } from 'src/app/core/interface/ParkingLot';
import { ParkinglotService } from 'src/app/services/parkinglot.service';
import { ToastMessage } from 'src/app/toast/toast.service';

@Component({
  selector: 'app-add-parkinglot',
  templateUrl: './add-parkinglot.component.html',
  styleUrls: ['../../../../../assets/css/index.css',
    './add-parkinglot.component.css']
})
export class AddParkinglotComponent implements OnInit {

  constructor(
    private parkinglotService:ParkinglotService,
    private toast :ToastMessage,
    private router:Router
  ) { }

  isShowRequired: boolean = false
  places = ["Quầy số 1", "Quầy số 2", "Quầy số 3"]
  public parkinglot: ParkingLot = ({} as any) as ParkingLot;

  ngOnInit(): void {
    this.isShowRequired = false
  }

  addParkingLot(data:any) {
    this.isShowRequired = true
    if (data.valid) {
      this.parkinglotService.insertParkingLot(data.value).subscribe(
        (data: any) => {
          this.toast.showSuccess("Add parking lot successfully!")
          this.backToList()
        },
        (error) => {
          this.toast.showError(" Please input area with number format")
        }
      );
    }
  }

  clearRequired() {
    this.isShowRequired = false
  }
  
  backToList(){
    this.router.navigate(['carpark-manager/parkinglot/list-parkinglot'])
  }
}
