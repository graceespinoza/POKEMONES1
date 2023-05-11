// import { FormProductComponent } from '../../components/form-product/form-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { MatTableModule } from '@angular/material/table' 
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';


@NgModule({
  declarations: [
    
    // FormProductComponent,
    ProductEditComponent,
    ProductCreateComponent,
    ProductsListComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    ProductsRoutingModule,
    MatTableModule
  ]
  
 
})
export class ProductsModule { }
