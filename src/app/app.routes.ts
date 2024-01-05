import { Routes } from '@angular/router';
import {importProvidersFrom} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AngularSvgIconModule} from 'angular-svg-icon';

export const routes: Routes = [
  {
    path: 'runs',
    loadChildren: () =>
      import('./runs/runs.routes').then((x) => x.RunsRoutes),
    providers: [importProvidersFrom(HttpClientModule), importProvidersFrom(AngularSvgIconModule.forRoot())]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/auth.routes').then((x) => x.AuthRoutes),
    providers: [importProvidersFrom(HttpClientModule), importProvidersFrom(AngularSvgIconModule.forRoot())]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'runs'
  },
  {
    path: '**',
    redirectTo: 'runs',
  }
];
