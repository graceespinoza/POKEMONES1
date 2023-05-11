import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from './../../../core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  products$: Observable<Product[]>; //si es observable o flujo de datos se coloca con el signo $ 

  constructor(
    private cartService: CartService
    ) {
      this.products$ = this.cartService.cart$; //la escicha continua que se agrega el carrito
  }
}
