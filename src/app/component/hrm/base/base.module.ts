import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { ListEmployeeComponent } from '../list-employee/list-employee.component';
const routes: Routes = [
    {
        path: 'add-employee',
        component: AddEmployeeComponent
    },
    {
        path: 'list-employee',
        component: ListEmployeeComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaseModule { }