import { Injectable, Pipe } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthService } from './core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


  constructor (
    private authService: AuthService,
    private router: Router
    ){

  }


  canActivate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    route: ActivatedRouteSnapshot,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return this.authService.hasUser().pipe(
  //     map(user => user === null ? true : false)
  //   ); 
  //   //esto me sirve para que me dje entrar a la ruta si es falso no me deja 
  //   //si es true si me deja ingresar a la ruta
  // }
  return this.authService.hasUser().pipe(map(user => user === null ? false : true),
    tap(hasUser => {
      if (!hasUser) {
        this.router.navigate(['/auth/login']);
        console.log()
      }
    }),
    )
  
}
  
}
