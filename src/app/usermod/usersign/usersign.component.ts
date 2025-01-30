import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

export class LoginModel{
  username!:string
  password!:string
}



@Component({
  selector: 'app-usersign',
  templateUrl: './usersign.component.html',
  styleUrls: ['./usersign.component.scss']
})
export class UsersignComponent {

  username:string = ""

  data:LoginModel
  names:string = ""
  loading:boolean = true

  constructor(){
    this.data  =  new LoginModel()
  }



  name="sdfghjkjhg"
 


  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  sendData(info:NgForm){
    alert("Hello Abigail!!!!")
    console.log("Hello Eva have you eaten??")
    console.log("data from form::",this.data)
    info.resetForm()
  }

  trigger(){
    console.log(this.username)
  }

}
