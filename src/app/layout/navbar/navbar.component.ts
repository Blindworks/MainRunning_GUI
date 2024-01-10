import {Component, OnInit} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterLink} from '@angular/router';
import {StorageService} from '../../authentication/service/storage.service';
import {NgIf} from '@angular/common';
import {AuthService} from '../../authentication/service/auth.service';
import {Subscription} from 'rxjs';
import {EventBusService} from '../../authentication/service/event-bus.service';

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
  eventBusSub?: Subscription;

  constructor(private storageService: StorageService,
              private authService: AuthService,
              private eventBusService: EventBusService) {
  }

  ngOnInit() {
    if(this.storageService.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.onClickLogout();
    });
  }

  onClickLogout() {
    this.storageService.clean();

    window.location.reload();
  }
}
