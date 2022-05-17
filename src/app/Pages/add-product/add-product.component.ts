import { CambioPaginaService } from './../../Services/CambioPagina/cambio-pagina.service';
import { Product } from './../../Models/product.interface';
import { HttpClientModule } from '@angular/common/http';

import { LoadingService } from './../../Services/Loading/loading.service';
import { Component, OnInit, } from '@angular/core';



@Component({
  selector: 'edix-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  principal: number= 1;

  data: Product = {
    nombre: undefined,
    descripcion: undefined,
    categoria: undefined,
    precio: undefined,
    imagen: undefined
  }

  tiene:boolean =false;
  descripcion: String= undefined;

  constructor(
    private loadingService : LoadingService,
    private cambio: CambioPaginaService,
    private http: HttpClientModule
    ) { }

  ngOnInit(): void {


  }

  public atras(){
    this.cambio.cambioPagina(this.principal);


  }

  public saveProduct(){

    alert("relaxing cup of café con leche")


  }

}
