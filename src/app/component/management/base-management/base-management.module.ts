import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'bookingoffice',
    loadChildren: () =>
      import('../BookingOffice/bookingoffice.module').then(
        (m) => m.BookingOfficeModule
      ),
  },

  {
    path: 'car',
    loadChildren: () =>
      import('../Car/car.module').then(
        (m) => m.CarModule
      ),
  },

  {
    path: 'parkinglot',
    loadChildren: () =>
      import('../ParkingLot/parkinglot.module').then(
        (m) => m.ParkingLotModule
      ),
  },
  {
    path: 'ticket',
    loadChildren: () =>
      import('../Ticket/ticket.module').then(
        (m) => m.TicketModule
      ),
  },
  {
    path: 'trip',
    loadChildren: () =>
      import('../Trip/trip.module').then(
        (m) => m.TripModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseManagementModule { }