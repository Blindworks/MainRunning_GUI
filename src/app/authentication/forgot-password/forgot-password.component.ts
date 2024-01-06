import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {SvgIconComponent} from 'angular-svg-icon';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    SvgIconComponent
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {

  signInFailed = false;
  errorMessage  = '';

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit(): void {

  }
}
