import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/core/interface/Car';
import { PipeComponent } from 'src/app/pipe/pipe';
import { CarService } from 'src/app/services/car.service';
import { ParkinglotService } from 'src/app/services/parkinglot.service';
import { ToastMessage } from 'src/app/toast/toast.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['../../../../../assets/css/index.css',
    './add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(
    private parkinglotService: ParkinglotService,
    private router: Router,
    private toast: ToastMessage,
    private pipe: PipeComponent,
    private carService : CarService
  ) { }

  public isShowRequired: boolean = false;
  public listCompany = ["Hoang long", "Cam van", "Phuong trang"]
  public addCar: Car = ({} as any) as Car;
  public parkinglots: any

  ngOnInit(): void {
    this.isShowRequired = false
    this.parkinglotService.getParkingLots().subscribe((data: any) => {
      this.parkinglots = data;
      console.log(data);
      
    })
  }

  addNewCar(data: any) {
    this.isShowRequired = true
    if (data.valid) {
      this.carService.addNewCar(data.value).subscribe(
        (data: any) => {
          this.toast.showSuccess("Add car successfully!")
          this.backToList()
        },
        (error) => {
          this.toast.showError(" Please input License plate")
        }
      );
    }

  }
  clearRequired() {
    this.isShowRequired = false
  }

  backToList() {
    this.router.navigate(['/carpark-manager/car/list-car'])
  }
}
