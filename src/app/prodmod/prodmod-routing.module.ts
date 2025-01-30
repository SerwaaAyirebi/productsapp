import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdpageComponent } from './prodpage/prodpage.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'prodpage'},
  {path:"prodpage",component: ProdpageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdmodRoutingModule { }
