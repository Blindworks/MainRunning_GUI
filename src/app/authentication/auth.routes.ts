import {Routes} from '@angular/router';

export const AuthRoutes: Routes = [
  { path: 'sign-up', loadComponent: () => import('../authentication/sign-up/sign-up.component').then((x) => x.SignUpComponent)},
  { path: 'sign-in', loadComponent: () => import('../authentication/sign-in/sign-in.component').then((x) => x.SignInComponent)},
  { path: 'forgot-password', loadComponent: () => import('../authentication/forgot-password/forgot-password.component').then((x) => x.ForgotPasswordComponent)},
  //{ path: 'donuts/new', loadComponent: () => import('../admin/containers/donut-single/donut-single.component').then((x) => x.DonutSingleComponent), data: { isEdit: false} },
  //{ path: 'donuts/:id', loadComponent: () => import('../admin/containers/donut-single/donut-single.component').then((x) => x.DonutSingleComponent), data: { isEdit: true} },
  { path: '', pathMatch: 'full', redirectTo: 'sign-up'}
]
