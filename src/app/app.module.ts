import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdComponent } from './prod/prod.component';
import { RetailComponent } from './retail/retail.component';
import { SlidesComponent } from './prod/slides/slides.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RetailCustomerComponent } from './retail-customer/retail-customer.component';
import { RetailStaffComponent } from './retail-staff/retail-staff.component';
import { RetailInventoryComponent } from './retail-inventory/retail-inventory.component';
import { RetailInfraComponent } from './retail-infra/retail-infra.component';
import { ChartistModule } from 'ng-chartist';

@NgModule({
  declarations: [
    AppComponent,
    ProdComponent,
    RetailComponent,
    SlidesComponent,
    RetailCustomerComponent,
    RetailStaffComponent,
    RetailInventoryComponent,
    RetailInfraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartistModule,
    NgCircleProgressModule.forRoot({ })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
