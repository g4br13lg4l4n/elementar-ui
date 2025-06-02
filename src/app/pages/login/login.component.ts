import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/select';
import { PageComponent } from '@meta/page/page.component';
import { PlaygroundComponent } from '@meta/playground/playground.component';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PageComponent,
    MatIcon,
    MatFormField,
    MatLabel,
    MatInputModule,
    FormsModule
  ],
  providers: [
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})


export class LoginComponent {

  loading = false;

  formLogin: FormGroup;
  fb = inject(FormBuilder);
  
  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.value;
      // Handle login logic here
      console.log('Login successful', { email, password });
    } else {
      console.log('Form is invalid');
    }
  }
}
