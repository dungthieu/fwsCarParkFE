import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service'; 

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private employeeService: EmployeeService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
      request = request.clone({
        headers: request.headers.set('Authorization','Bearer ' + this.employeeService.token)
    });
    return next.handle(request);
  }
}
