import { CambioPaginaService } from './../../Services/CambioPagina/cambio-pagina.service';
import { Component,  OnInit } from '@angular/core';
import { productos } from 'src/app/Models/product.interface';




@Component({
  selector: 'edix-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {

  products = productos;

  constructor(private cambio:CambioPaginaService) { }

  ngOnInit(): void {

  }

  public VueltaAAgregar (){
    this.cambio.cambioPagina(2);
  }

  public VueltaAPrincipal (){
    this.cambio.cambioPagina(1);
  }

}
