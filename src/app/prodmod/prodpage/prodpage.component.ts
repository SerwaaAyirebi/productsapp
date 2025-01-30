import { Component, OnInit } from '@angular/core';

export class ProductModel {
  product!:string
  cost!:string
  status!:string
}
 const products = [
    {product: "Milo", cost: "$85",},
    {product: "Ovaltine",cost: "$65", status: "Purchased"},
    {product: "Coffee",cost: "$45",status: "Not Purchased"},
    {product: "Tea", cost: "$25", status: "Purchased"},
    {product: "Juice", cost: "$50", status: "Not Purchased"},
    {product: "Water", cost: "$15", status: "Purchased"},
    {product: "Soda",cost: "$30", status: "Not Purchased"},
    {product: "Chocolate Milk",cost: "$60", status: "Purchased"},
    {product: "Fruit Smoothie", cost: "$55",status: "Not Purchased"},
    {product: "Energy Drink",cost: "$40",status: "Purchased"}
  ]

  @Component({
    selector: 'app-prodpage',
    templateUrl: './prodpage.component.html',
    styleUrls: ['./prodpage.component.scss']
  })
  export class ProdpageComponent implements OnInit {

    viewComponent:boolean = false
    allProducts:any[] = []

    ngOnInit(): void {
      this.allProducts = products

      console.log("hey world")
      console.log('data:',this.allProducts)
    }
  }
