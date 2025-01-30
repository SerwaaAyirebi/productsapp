import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginModel } from '../usersign/usersign.component';

export class searchModel {
  searchForm!: FormGroup;
}

export class UsermodModel {
  name!: string
  age!: string
  email!: string
  role!: string
  action!: string
  image!: string
  searchForm!: string
}
//  VARIABLE:TYPE -------------------------------

export class Logmodel {
  name!: string
  age!: string
  email!: string
  role!: string
  password!: string
  search!: string
}

//  name:string = ""

//   data:Loginmodel
//   names:string = ""
//   loading:boolean = true

// constructor(){
//   this.data  =  new Loginmodel()
// }

// sendData(info:NgForm){
//   alert("Hello Abigail!!!!")
//   console.log("data from form::",this.data)
//   info.resetForm()
// }

// trigger(){
//   console.log(this.name)

// }
//    ARRAY CONTAINING OBJECTS -----------------------------
const user = [
  { name: "Eva", age: "24", email: "evaessuman@gmail.com", role: "Software Engineer", image: 'data:image/jpeg;base64,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' },
  { name: "John", age: "30", email: "john.doe@example.com", role: "Product Manager", image: 'data:image/jpeg;base64,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' },
  { name: "Sophia", age: "27", email: "sophia.taylor@example.com", role: "UX Designer", },
  { name: "Michael", age: "35", email: "michael.jones@example.com", role: "Data Scientist", },
  { name: "Olivia", age: "29", email: "olivia.white@example.com", role: "Project Manager", },
  { name: "James", age: "32", email: "james.smith@example.com", role: "Software Developer", },
  { name: "Emma", age: "26", email: "emma.brown@example.com", role: "Business Analyst", },
  { name: "Lucas", age: "28", email: "lucas.miller@example.com", role: "DevOps Engineer", },
  { name: "Isabella", age: "31", email: "isabella.davis@example.com", role: "Marketing Specialist", },
  { name: "Liam", age: "34", email: "liam.martin@example.com", role: "System Administrator", }
]

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent implements OnInit {
  viewComponent: boolean = false
  allUsers: any[] = []
  user: any;
  any: any;

  ngOnInit(): void {
    this.allUsers = user

    console.log('data:', this.allUsers)
  }
  username: string = ""
  pre!: number
  data: Logmodel
  names: string = ""
  loading: boolean = true
  searchQuery!: string

  constructor() {
    this.data = new Logmodel()
    // this.allUsers= [this.data];

  }
  //   LOGGING IN / UPDATING THE FORM --------------------------------
  sendData(info: NgForm) {
    alert("Hello " + this.data.name)
    // console.log("Hello Eva have you eaten??")
    console.log("data from form::", this.data);
    const user = this.allUsers[this.pre]
    this.allUsers.push({ ...this.data })
    if (user) {
      this.allUsers[this.pre] = this.data
    } else {
      console.log("user does not exist")
      this.allUsers.push({ ...this.data });
    }
    // this.allUsers= [this.data];
    // info.resetForm()
  }

  trigger() {
    console.log(this.username)
  }
  //    DELETING ---------------------------------
  subBox: any = [];
  delete(index: number) {
    // console.log("")
    console.log("This is the original array:", this.allUsers);

    const subBox = this.allUsers.filter((user, i) => i !== index);

    alert("updating....");
    this.allUsers = subBox;
  }
  // console.log('nums',index)

  //   for(let i=0; i<this.allUsers.length; i++){
  //     if(i !== index) {
  //       this.subBox.push(this.allUsers[i]);
  //     }
  //   }
  //   console.log("new",this.subBox);
  //   this.allUsers = this.subBox;

  //    EDITING ------------------------
  edit(index: number, people: any) {
    this.pre = index
    console.log("editing");
    this.data = people;
    console.log('user updated', this.allUsers)
  }

  // SEARCH --------------
  searchUsers:any=[];
  search() {
    // console.log("find",this.allUsers);
    console.log("found:" + this.searchQuery)
      if (this.searchQuery) { 
        this.searchUsers = this.allUsers.filter((user:UsermodModel)=>
        user.name.toLowerCase() === this.searchQuery.toLowerCase()
        );
        console.log(this.searchUsers);
        return this.allUsers = this.searchUsers

      } else{
        // console.log("no user")
        return this.allUsers = user;
      }
     // this.subBox = this.searchUsers  return true;
       }
      clear(){
        if (this.searchQuery === ''){
          console.log(this.allUsers)
          return this.allUsers = user;
        }else{
          return null
        }
        }

       }



  // search(index:any) {
  //   for(let i=0; i < this.allUsers.length; i++){
  //     if (i !== -1) {
  //       console.log("Found ");
  //      } else(i !== index); {
  //       console.log("try again");
  //   }
  // console.log(this.allUsers)
  // if( i!== -1){
  //   console.log("existing")
  //   // console.log(this.subBox.indexOf(this.allUsers))
  // }else{
  //   alert('not existing')
  // 

  //   console.log("user's info is editing");
  //   this.data =
  // }


// // Find the index of the element to remove (e.g., value 3)
// let index = u.indexOf(i);

// if (index !== -1) {  // Check if the element exists
//   u.splice(index, 1);
// }

// console.log(u); // Output: [1, 2, 4, 5]