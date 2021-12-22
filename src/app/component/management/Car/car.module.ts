import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddCarComponent } from './add-car/add-car.component';
import { ListCarComponent } from './list-car/list-car.component';

const routes: Routes = [
    {
        path: 'add-car',
        component: AddCarComponent
    },
    {
        path: 'list-car',
        component: ListCarComponent
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CarModule { }