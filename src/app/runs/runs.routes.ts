import {Routes} from '@angular/router';

export const RunsRoutes: Routes = [
  { path: 'runs', loadComponent: () => import('../runs/containers/run-list/run-list.component').then((x) => x.RunListComponent)},
  { path: 'run-upload', loadComponent: () => import('../runs/containers/run-upload/run-upload.component').then((x) => x.RunUploadComponent)},
  //{ path: 'donuts/new', loadComponent: () => import('../admin/containers/donut-single/donut-single.component').then((x) => x.DonutSingleComponent), data: { isEdit: false} },
  //{ path: 'donuts/:id', loadComponent: () => import('../admin/containers/donut-single/donut-single.component').then((x) => x.DonutSingleComponent), data: { isEdit: true} },
  { path: '', pathMatch: 'full', redirectTo: 'runs'}
]
