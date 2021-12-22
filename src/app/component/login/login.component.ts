import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/core/interface/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ToastMessage } from 'src/app/toast/toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
    '../../../assets/css/form.css']
})
export class LoginComponent implements OnInit {

  constructor
    (
      private employeeService: EmployeeService,
      private router: Router,
      private toast: ToastMessage
    ) { }

  public user: UserLogin = ({} as any) as UserLogin;;

  ngOnInit(): void {
  }

  formSubmit() {
    // toggle spinner
    this.employeeService.login(this.user).subscribe(
      (data: any) => {
          this.employeeService.logUserIn(data.body)
          this.loginRouter()
          this.toast.showSuccess("Welcome " + localStorage.getItem("Name"))
      },
      (error) => {
        this.toast.showError(" Login Fail !")
      }
    );
      
  }

  // riderect router
  loginRouter() {
    if (this.employeeService.isAdmin) {
      this.goToEmployee()
    }
    else if (this.employeeService.isCarParkManager) {
      this.goToParking()
    }
  }
  goToEmployee() {
    this.router.navigate(['admin-hrm']);
  }

  goToParking() {
    this.router.navigate(['carpark-manager']);
  }
}
