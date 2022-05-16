import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

const routes: Routes = [
 
   {
    path: 'dash',
    component: CustomerDashboardComponent,
    loadChildren: () => import('./customer-dashboard/customer-dashboard.module').then(i => i.CustomerDashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {
}