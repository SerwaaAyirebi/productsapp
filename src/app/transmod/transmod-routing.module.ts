import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranspageComponent } from '../transpage/transpage.component';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo:"transpage"}
  ,{path:"transpage" ,component:TranspageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransmodRoutingModule { }
