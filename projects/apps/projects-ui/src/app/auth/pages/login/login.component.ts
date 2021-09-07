import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'projects-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  private subscription = new Subscription();

  loginForm: FormGroup = this.formBuilder.group({
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleLogin(): void {
    const { email, password } = this.loginForm.value;
    this.subscription.add(
      this.authService.login(email, password).subscribe(
        ok => {
          if (ok === true) {
            this.router.navigateByUrl('/dashboard');
          } else {
            Swal.fire('Error', ok, 'error');
          }
        },
      )
    );
  }

}
