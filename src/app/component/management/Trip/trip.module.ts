import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddTripComponent } from './add-trip/add-trip.component';
import { ListTripComponent } from './list-trip/list-trip.component';

const routes: Routes = [
    {
        path: 'add-trip',
        component: AddTripComponent
    },
    {
        path: 'list-trip',
        component: ListTripComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TripModule { }