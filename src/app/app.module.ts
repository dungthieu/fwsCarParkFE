import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ListEmployeeComponent } from './component/hrm/list-employee/list-employee.component';
import { AddEmployeeComponent } from './component/hrm/add-employee/add-employee.component';
import { BaseComponent } from './component/hrm/base/base.component';
import { ListTicketComponent } from './component/management/Ticket/list-ticket/list-ticket.component';
import { AddTicketComponent } from './component/management/Ticket/add-ticket/add-ticket.component';
import { AddBookingofficeComponent } from './component/management/BookingOffice/add-bookingoffice/add-bookingoffice.component';
import { AddCarComponent } from './component/management/Car/add-car/add-car.component';
import { AddParkinglotComponent } from './component/management/ParkingLot/add-parkinglot/add-parkinglot.component';
import { AddTripComponent } from './component/management/Trip/add-trip/add-trip.component';
import { ListTripComponent } from './component/management/Trip/list-trip/list-trip.component';
import { ListParkinglotComponent } from './component/management/ParkingLot/list-parkinglot/list-parkinglot.component';
import { ListCarComponent } from './component/management/Car/list-car/list-car.component';
import { ListBookingofficeComponent } from './component/management/BookingOffice/list-bookingoffice/list-bookingoffice.component';
import { BaseManagementComponent } from './component/management/base-management/base-management.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListEmployeeComponent,
    AddEmployeeComponent,
    BaseComponent,
    ListTicketComponent,
    AddTicketComponent,
    AddBookingofficeComponent,
    AddCarComponent,
    AddParkinglotComponent,
    AddTripComponent,
    ListTripComponent,
    ListParkinglotComponent,
    ListCarComponent,
    ListBookingofficeComponent,
    BaseManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 6000,
      positionClass: 'toast-bottom-right',
      tapToDismiss: true,
      preventDuplicates: true,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
