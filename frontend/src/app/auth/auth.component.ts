import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLoginActive: boolean = true; // Default to the login form being active

  toggleForms() {
    this.isLoginActive = !this.isLoginActive;
  }

  @ViewChild('conformPassword', { static: false })
  conformPassword!: ElementRef;

  UserRegistrationForm: FormGroup;
  UserLoginForm: FormGroup;
  constructor() {

    this.UserLoginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

    this.UserRegistrationForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  Register() {
    if (this.UserRegistrationForm.valid && this.UserRegistrationForm.value.password === this.conformPassword.nativeElement.value) {
      console.log(this.UserRegistrationForm);
      alert('Registered Successfully!');
    } else {
      alert('Invalid form or passwords do not match.');
    }
  }

  Login() { 
    console.log(this.UserLoginForm)
  }

}
