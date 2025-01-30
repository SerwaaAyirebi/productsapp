import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';
import { UsersignComponent } from './usersign/usersign.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'userpage'},
  {path:"userpage",component: UserpageComponent},
  {path:"usersign",component: UsersignComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermodRoutingModule { }