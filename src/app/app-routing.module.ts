import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdComponent } from './prod/prod.component';
import {RetailComponent} from './retail/retail.component'


const routes: Routes = [
  {
    path: 'product',
    component: ProdComponent
  },
  {
    path: 'retail',
    component: RetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
