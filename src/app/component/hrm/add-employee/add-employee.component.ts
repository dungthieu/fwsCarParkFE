import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEmployee } from 'src/app/core/interface/Employee';
import { PipeComponent } from 'src/app/pipe/pipe';
import { EmployeeService } from 'src/app/services/employee.service';
import { ToastMessage } from 'src/app/toast/toast.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['../../../../assets/css/index.css',
    './add-employee.component.css'
  ]
})
export class AddEmployeeComponent implements OnInit {
  public isShowRequired: boolean = false;
  public employee: AddEmployee = ({} as any) as AddEmployee;
  public department = ["Parking", "Employee", "Admin"]
  public sex = [0, 1]
  public isValidateEmail: Boolean = false
  public isValidateDate: Boolean = false
  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private toast: ToastMessage,
    private pipe: PipeComponent
  ) { }

  ngOnInit(): void {
    this.employee.sex = 0;
    this.isShowRequired = false
  }

  addEmployee(dataValid: any, data: any) {
    this.isShowRequired = true
    let validate = this.validate(data.value)

    if (!dataValid && validate) {
      data.value.dateOfBirth = this.pipe.convertDate(data.value.dateOfBirth);

      this.employeeService.insertEmployee(data.value).subscribe(
        (data: any) => {
          this.toast.showSuccess("Add employee successfully !")
          this.backToList()
        },
        (error) => {
          this.toast.showError(" Add fail!")
        }
      );
    }
  }

  clearRequired() {
    this.isShowRequired = false
  }

  validate(data: any) {
    this.isValidateEmail = this.pipe.validateEmail(data.email)
    this.isValidateDate = this.pipe.validateDate(data.dateOfBirth)
    console.log(this.isValidateDate);
    
    return this.isValidateEmail
  }
  backToList() {
    this.router.navigate(['/admin-hrm/list-employee'])
  }
}
