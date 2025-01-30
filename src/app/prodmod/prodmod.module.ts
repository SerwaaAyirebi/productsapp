import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdmodRoutingModule } from './prodmod-routing.module';
import { ProdpageComponent } from './prodpage/prodpage.component';


@NgModule({
  declarations: [
    ProdpageComponent
  ],
  imports: [
    CommonModule,
    ProdmodRoutingModule
  ]
})
export class ProdmodModule { }
