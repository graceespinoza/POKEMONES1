import { Component, OnInit } from '@angular/core';
import { Product } from './../../../core/models/product.model';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  
  
  products: Product[]= [];

  constructor (
    private productsService: ProductsService){  }
   
     
  
  ngOnInit() { //mejor practica para hacer peticiones de productos
    this.fetchProducts(); //me trae los productos
  }
      clickProduct(id:number){
          console.log('product');
          console.log(id);
      }
      // //me trae los productos
      fetchProducts() { 
            this.productsService.getAllproducts()
            .subscribe(products => {
              this.products = products; //tipo producto pero me esta dando un object
              
            });
          }

        
}
