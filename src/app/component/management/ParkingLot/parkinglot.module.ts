import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListParkinglotComponent } from './list-parkinglot/list-parkinglot.component';
import { AddParkinglotComponent } from './add-parkinglot/add-parkinglot.component';

const routes: Routes = [
    {
        path: 'list-parkinglot',
        component: ListParkinglotComponent
    },
    {
        path: 'add-parkinglot',
        component: AddParkinglotComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ParkingLotModule { }