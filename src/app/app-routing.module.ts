
import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';


import {DemoComponent} from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

// import { AdminGuard } from './admin.guard'; 

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    
    children:[
      
      {
        path:'',
        redirectTo:'/home',
         pathMatch:'full',
      },
      {

    
      path:'home',
      loadChildren: ()=> import ('./home/home.module').then(m=> m.HomeModule)
        },
        {//si me deja utilizar varios guardian 
      path:'products',
      // canActivate:[AdminGuard],
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule)

   },
        {
        path:'contact',
        // canActivate:[AdminGuard],
        loadChildren: ()=> import ('./contact/contact.module').then(m=> m.ContactModule)
          },
    
    
    {
      path: 'order',
      loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
    },
    
    ]
  },
  

      {path:'admin',
      canActivate: [AdminGuard],
      loadChildren: ()=> import ('./admin/admin.module').then(m=> m.AdminModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {path:'demo',
      component:DemoComponent},

      {path:'**',
      component:PageNotFoundComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
    
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
