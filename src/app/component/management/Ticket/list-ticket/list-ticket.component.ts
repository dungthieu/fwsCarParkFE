import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/core/interface/Ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { ToastMessage } from 'src/app/toast/toast.service';
@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css',
    '../../../../../assets/css/table.css']
})
export class ListTicketComponent implements OnInit {

  constructor(private ticketService: TicketService, private toast : ToastMessage) { }

  tickets: Ticket[] = [
  ]
  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((data: any) => {
      this.tickets = data;

    }, (error) => {
			this.toast.showError("Database connection error")
		})
  }

}
