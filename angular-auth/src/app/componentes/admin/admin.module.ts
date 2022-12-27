import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [HomeComponent], // para lazy loading.
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
