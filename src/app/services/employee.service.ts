import { AddEmployee, Employee, UserLogin } from '../core/interface/Employee';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { baseUrl } from '../core/api/index.constant';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': '*/*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
  })
}


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  ///declare
  user!: any
  token: string = "";
  public isAdmin: boolean = false;
  public isCarParkManager: boolean = false;


  //
  constructor(private http: HttpClient) {
    let token = localStorage.getItem("token");
    if (token) {
      this.token = token
    }
  }

  // function
  getEmployees() {
    return this.http.get(`${baseUrl}/Employee/getAllEmployee`)
  }

  login(user: UserLogin): Observable<any> {
    const url = `${baseUrl}/Employee/login`;

    return this.http.post(url, user, { responseType: 'text', observe: 'response' }).pipe(catchError(this.handleError));
  }

  insertEmployee(employee: AddEmployee) {
    const url = `${baseUrl}/Employee/createEmployee`;
    return this.http.post(url, employee, { responseType: 'text' }).pipe(catchError(this.handleError));

  }
  //
  getRole(jwt: any) {
    let jwtData = jwt.split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)

    let role = decodedJwtData.role;

    if (role == "Admin") {
      this.isAdmin = true;
      this.isCarParkManager = false;
    }
    else if (role == "Parking") {
      this.isAdmin = false;
      this.isCarParkManager = true;
    }
    else {
      this.isAdmin = false;
      this.isCarParkManager = false;
    }
    localStorage.setItem("Name", decodedJwtData.unique_name);
    localStorage.setItem("Email", decodedJwtData.email);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  logUserIn(result: any) {
    this.token = result;
    localStorage.setItem("token", result);
    this.getRole(result);
  }
}
