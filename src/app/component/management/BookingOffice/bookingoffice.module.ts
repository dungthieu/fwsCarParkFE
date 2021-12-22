import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddBookingofficeComponent } from '../BookingOffice/add-bookingoffice/add-bookingoffice.component';
import { ListBookingofficeComponent } from '../BookingOffice/list-bookingoffice/list-bookingoffice.component';
import { BaseManagementComponent } from '../base-management/base-management.component';

const routes: Routes = [

    {
        path: 'add-bookingoffice',
        component: AddBookingofficeComponent
    },
    {
        path: 'list-bookingoffice',
        component: ListBookingofficeComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BookingOfficeModule { }