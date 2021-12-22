import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';

const routes: Routes = [
    {
        path: 'add-ticket',
        component: AddTicketComponent
    },
    {
        path: 'list-ticket',
        component: ListTicketComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TicketModule { }