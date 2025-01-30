import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermodRoutingModule } from './usermod-routing.module';
import { UserpageComponent } from './userpage/userpage.component';
import { UsersignComponent } from './usersign/usersign.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserpageComponent,
    UsersignComponent
  ],
  imports: [
    CommonModule,
    UsermodRoutingModule,
    FormsModule
  ]
})
export class UsermodModule { }
