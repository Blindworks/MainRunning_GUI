import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RouterLink} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [AngularSvgIconModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, NgIf, MatCheckboxModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit{

  signUpFailed = false;
  errorMessage  = '';

  profileForm!: FormGroup;
  submitted = false;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmPassword: [''],
      acceptTerms:['', Validators.required]
    });
  }

  get formControls() {
    return this.profileForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    this.authService.register(this.profileForm.get("username")?.value,
      this.profileForm.get("email")?.value,
      this.profileForm.get("password")?.value,
      this.profileForm.get("confirmPassword")?.value).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        this.signUpFailed = true;
        this.errorMessage = err.error.errors;
      }
    })
  }
}
