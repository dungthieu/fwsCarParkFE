import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private router: Router) { }
  userName: any;

  ngOnInit(): void {
    this.userName = localStorage.getItem('Name')
    
  }

  onLogout() {
    localStorage.removeItem('Name');
    localStorage.removeItem('Email');
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}
