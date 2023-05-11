import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProductsService } from '../../../../core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidatos } from 'src/app/utils/validator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;


  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
 
       //inyecta una independencia

  ){
    this.buildForm();
  }
  ngOnInit(): void {
      this.activeRoute.params
      .subscribe((params: Params) => {
        const id = params['id'];
        this.productsService.getProduct(this.id)
        .subscribe(product =>{
          this.form.patchValue(product);
        });
      });
  }
   saveProduct(event: Event) {
      event.preventDefault();
      if (this.form.valid) {
        const product = this.form.value;
        this.productsService.updateProduct(this.id, product)
        .subscribe((newProduct) => {
          console.log(newProduct);
          this.router.navigate(['./admin/products']);
        });
  } //obtengo un json de todos los valores
    }


    private buildForm() {
      this.form = this.formBuilder.group({
        
        title: ['', [Validators.required]],
        price: ['', [Validators.required, MyValidatos.isPriceValid]],
        image: [''],
        descripcion: ['', [Validators.required]],
      });
  }
  get priceField() {
    return this.form.get('price');
  }
}
