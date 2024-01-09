import {Component, OnInit} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {SvgIconComponent} from 'angular-svg-icon';
import {AuthService} from '../service/auth.service';
import {StorageService} from '../service/storage.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    SvgIconComponent
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {

  signInFailed = false;
  errorMessage  = '';

  loginForm!: FormGroup;
  loggedIn: boolean = false;
  roles: string[] = [];

  constructor(private authService: AuthService,
              private storageService: StorageService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: ['']
    });

    if(this.storageService.isLoggedIn()) {
      this.loggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.authService.login(this.loginForm.get("username")?.value,
      this.loginForm.get("password")?.value).subscribe({
      next: data => {
        this.signInFailed = false;
        this.errorMessage = "";
        console.log(data);
        this.storageService.saveUser(data);

        this.loggedIn = true;
        this.roles = this.storageService.getUser().roles;
        window.location.reload();
      },
      error: err => {
        this.signInFailed = true;
        this.errorMessage = err.error.errors;
      }
    })
  }
}
