import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/interface/Car';
import { CarService } from 'src/app/services/car.service';
import { ToastMessage } from 'src/app/toast/toast.service';
@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css',
    '../../../../../assets/css/table.css']
})
export class ListCarComponent implements OnInit {

  constructor(private carServie: CarService, private toast:ToastMessage) { }

  cars: Car[] = []

  ngOnInit(): void {
    this.carServie.getCars().subscribe((data: any) => {
      this.cars = data;
    }, (error) => {
			this.toast.showError("Database connection error")
		})
  }

}
