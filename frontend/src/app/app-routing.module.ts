import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CustomerListComponent} from './customer-list/customer-list.component';

const appRoutes: Routes = [
  { path: 'customer-list', component: CustomerListComponent },
  { path: '',   redirectTo: '/customer-list', pathMatch: 'full' }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
