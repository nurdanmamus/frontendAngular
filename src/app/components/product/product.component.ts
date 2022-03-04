import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // product: any = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5 }
  // product1: any = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5 }
  // product2: any = { productId: 3, productName: 'Mouse', categoryId: 1, unitPrice: 5 }
  // product3: any = { productId: 4, productName: 'Keyboard', categoryId: 1, unitPrice: 5 }

  products: Product[] = [
    // this.product,
    // this.product1,
    // this.product2,
    // this.product3
  ];
  dataLoaded=false;

  // productResponseModel : ProductResponseModel={
  //   data:this.products,
  //   message : "",
  //   success : true
  // }

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    //this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true
    });
  }

}
