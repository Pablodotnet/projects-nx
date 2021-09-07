import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'projects-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {

  get user() {
    return this.authService.user;
  }

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  handleLogout(): void {
    this.router.navigateByUrl('/auth');
    this.authService.logout();
  }

}
