import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-management',
  templateUrl: './base-management.component.html',
  styleUrls: ['./base-management.component.css']
})
export class BaseManagementComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  userName: any;

  ngOnInit(): void {
    this.userName = localStorage.getItem('Name')
  }

  onLogout() {
    localStorage.removeItem('Name');
    localStorage.removeItem('Email');
    localStorage.clear();
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
