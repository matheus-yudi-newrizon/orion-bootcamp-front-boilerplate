import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentRoute = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

  isLoginPage() {
    return this.currentRoute === '/login';
  }
  isSignUpPage() {
    return this.currentRoute === '/sign-up';
  }
}
