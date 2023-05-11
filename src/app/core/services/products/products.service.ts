import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// import { AngularFirestore} from '@angular/fire/compat/firestore'

import { Product } from './../../models/product.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
     
  
    constructor (
      private http: HttpClient
    ) {}
    getAllproducts(){
      return this.http.get<Product[]>(`${environment.url_api}`);
      // return this.http.get<Product[]>(`${environment.url_api}/products`); 
      
     
      }
      getProduct(id: string){
        return this.http.get<Product>(`${environment.url_api}/products/${id}`);
         // return this.products.find(item =>id === item.id);
        //  return this.http.get<Product>(`${environment.url_api}${id}`);
      }

      createProduct(product: Product) { 
        // es producto porque necesito todas las variables
        return this.http.post(`${environment.url_api}/products`, product); //cada vez que hago esto creo un producto
      }

      updateProduct(id: string, changes: Partial<Product>){ //change es la parte de que yo quiera actualizar o enviar
          return this.http.put(`${environment.url_api}/products/${id}`,changes);
      }
      deleteProduct (id:string){
        return this.http.delete(`${environment.url_api}/products/${id}`);      }
}