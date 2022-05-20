import { CambioPaginaService } from './../../Services/CambioPagina/cambio-pagina.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'edix-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  loading;
  router: Router;
  visualizar: number = 3;//variabla con el valor de la ruta a la página visualizar.
  rutaAdd: number = 2;//variable con el valor de la ruta a la página agregar producto.

  constructor(
    private cambio: CambioPaginaService,//Importación del servicio CambioPaginaService.
  ) { }

  ngOnInit(): void {

  }

  /**método que al pulsar el botón visualizar llama al servicio CambioPaginaServicie
   y envía la variable que nos dirige a visualizar.
   */
  public onClickVisualizar() {
    this.cambio.cambioPagina(this.visualizar);
  }

  /**
   * Método que al pulsar el botón agregar Producto nos envía a la pagina Agregar producto
   * pasando la variabla rutaAdd que nos dirige a dicha página.
   */
  public onClickAgregar() {
    this.cambio.cambioPagina(this.rutaAdd);

  }
}
