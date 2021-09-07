import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'projects-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  private subscription = new Subscription();

  registerForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  handleRegister() {
    const { name, email, password } = this.registerForm.value;
    this.subscription.add(
      this.authService.register(name, email, password).subscribe(
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
