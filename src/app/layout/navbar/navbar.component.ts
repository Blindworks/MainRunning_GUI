import {Component, OnInit} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterLink} from '@angular/router';
import {StorageService} from '../../authentication/service/storage.service';
import {NgIf} from '@angular/common';
import {AuthService} from '../../authentication/service/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    RouterLink,
    NgIf,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private storageService: StorageService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  onClickLogout() {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
