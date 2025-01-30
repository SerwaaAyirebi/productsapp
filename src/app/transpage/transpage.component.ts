import { Component,OnInit } from '@angular/core';

export class TransmodModule{
  transId!:string
  product!:string
  amount!:string
  status!:string
}

const trans = [
  {transId: "01",product: "Indomie", amount: "$12", status: "Paid"},
  {transId: "02", product: "Rice",amount: "$20",status: "Paid"},
  {transId: "03",product: "Eggs",amount: "$5",status: "Unpaid"},
  {transId: "04",product: "Milk",amount: "$8",status: "Paid"},
  {transId: "05",product: "Bread",amount: "$3",status: "Paid"},
  {transId: "06",product: "Tomatoes",amount: "$4",status: "Unpaid"},
  {transId: "07",product: "Chicken", amount: "$15", status: "Paid"},
  {transId: "08",product: "Fish",amount: "$10",status: "Paid"},
  {transId: "09",product: "Cereals",amount: "$7",status: "Unpaid"},
  {transId: "10",product: "Apples",amount: "$6",status: "Paid"}
]


@Component({
  selector: 'app-transpage',
  templateUrl: './transpage.component.html',
  styleUrls: ['./transpage.component.scss']
})
export class TranspageComponent implements OnInit {
  viewComponent:boolean = false
  allTrans:TransmodModule[]=[]

  ngOnInit(): void {
    this.allTrans= trans

    console.log('data:',this.allTrans)
  }

}
