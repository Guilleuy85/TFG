
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'src/app/Models/Routes.interface';

@Injectable({
  providedIn: 'root'
})
export class CambioPaginaService {


  public actualIndexRoute: number = 0;

  public routes: Route[] = [{
    path: '/login',
    touched: false,
  }, {
    path: '/principal',
    touched:false,
  }, {
    path: '/add',
    touched:false,

  }, {
    path: '/view',
    touched:false,
  }]

  constructor(private router: Router) { }

  public cambioPagina(pagina: number) {
    this.actualIndexRoute =pagina;
    this.routes[pagina-1].touched=true;
    if(this.routes[pagina-1].touched=== true){
      this.router.navigateByUrl(
        this.routes[this.actualIndexRoute].path)

    }

  };

  public vueltaALogin(){
    this.router.navigateByUrl(this.routes[0].path);
  }


  public checkRoute() {
    if (this.routes[0].touched) {
      this.router.navigateByUrl(
        this.routes[this.actualIndexRoute].path)
    } if (this.routes[1].touched) {
      this.router.navigateByUrl(
        this.routes[this.actualIndexRoute].path)
    } if (!this.routes.findIndex[this.actualIndexRoute]) {//
      this.router.navigateByUrl(
        this.routes[this.actualIndexRoute].path)
    }

  }



};


