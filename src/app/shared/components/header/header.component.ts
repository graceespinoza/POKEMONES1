import { CartService } from './../../../core/services/cart.service';
import { Observable, map } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    total$: Observable<number>;

    
  constructor(
    private cartService: CartService 
      
    
  ){
    //permite agregar mas cosas al carrito 
    //map transforma el producto al contador
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
    // .subscribe(total =>{ //ya no sera producto porque por medio de map me transforma por ende me llega total
    
    //   this.total = total;
    // });
  }
}
