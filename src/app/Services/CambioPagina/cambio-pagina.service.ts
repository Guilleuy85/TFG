
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'src/app/Models/Routes.interface';

@Injectable({
  providedIn: 'root'
})
export class CambioPaginaService {


  public actualIndexRoute: number = 0;//variable que almacena el index de la página a la que se debe dirigir.

  /**
   *Rutas almacenadas para comprobar si ha sido tocada que se comprueba en el método checkRoute
   */
  public routes: Route[] = [{
    path: '/login',
    touched: true,
  }, {
    path: '/principal',
    touched: false,
  }, {
    path: '/add',
    touched: false,

  }, {
    path: '/view',
    touched: false,
  }]

  constructor(private router: Router) { }

  /**
   * Método que se utiliza en los cambios de página.
   * recibe como variable la página a la que se quiere dirigir.
   */

  public cambioPagina(pagina: number) {
    this.actualIndexRoute = pagina;
    this.routes[pagina - 1].touched = true;
    if (this.routes[pagina - 1].touched === true) {
      this.router.navigateByUrl(
        this.routes[this.actualIndexRoute].path)

    }

  };
  /**
   * Método que utiliza el navbar para volver a lógin
   */
  public vueltaALogin() {
    this.router.navigateByUrl(this.routes[0].path);
  }

  /**
   * Método que chequéa que el cliente no pueda acceder a una página posterior a Login sin haber
   * pasado por Login.
   */
  public checkRoute() {
    if (this.routes[0].touched) {
      this.router.navigateByUrl(
        this.routes[this.actualIndexRoute].path)
    } if (this.routes[1].touched) {
      this.router.navigateByUrl(
        this.routes[this.actualIndexRoute].path)
    } if (this.routes[2].touched) {
      this.router.navigateByUrl(
        this.routes[this.actualIndexRoute].path)
    } if (this.routes[3].touched) {
      this.router.navigateByUrl(
        this.routes[this.actualIndexRoute].path)
    }
  }



};


