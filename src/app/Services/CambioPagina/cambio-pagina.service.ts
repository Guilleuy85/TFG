import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CambioPaginaService {


  public actualIndexRoute: number = 0;

  public routes: Route[] = [{
    path: '/login',
  }, {
    path: '/principal',
  }, {
    path: '/add',

  }, {
    path: '/view'
  }]

  constructor(private router: Router) { }

  public cambioPagina(pagina: number) {
    console.log("pagina"+pagina)
    this.actualIndexRoute =pagina;
    this.router.navigateByUrl(
      this.routes[this.actualIndexRoute].path)
  };



};

interface Route {
  path: string;
};
