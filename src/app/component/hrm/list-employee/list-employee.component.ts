import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/interface/Employee';
import { PipeComponent } from 'src/app/pipe/pipe';
import { EmployeeService } from 'src/app/services/employee.service';
import { ToastMessage } from 'src/app/toast/toast.service';
@Component({
	selector: 'app-list-employee',
	templateUrl: './list-employee.component.html',
	styleUrls: [
		'./list-employee.component.css',
		'../../../../assets/css/table.css'
	]
})

export class ListEmployeeComponent implements OnInit {

	public users: Employee[] = [];

	constructor(
		private employeeService: EmployeeService,
		private toast: ToastMessage,
		private pipe: PipeComponent
	) { }

	ngOnInit(): void {
		this.employeeService.getEmployees().subscribe((data: any) => {
			this.users = data

		}, (error) => {
			this.toast.showError("Database connection error")
		}
		);
	}

}
