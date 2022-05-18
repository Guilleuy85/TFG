import { Categoria, categorias } from './../../Models/Categorias';
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

  data: Product = {
    nombre: undefined,
    descripcion: undefined,
    categoria: undefined,
    precio: undefined,
    imagen: undefined
  }

  principal: number = 1;//Variable que se envía para el cambio de página.
  lista: Categoria[];
  nombreProducto: string= undefined;
  categoriaProducto: string=undefined;
  descripcionProducto: string = undefined;
  precioCompra:string= undefined;
  precioVenta: string=undefined;
  imagenProducto: string;


  constructor(
    private loadingService: LoadingService,
    private cambio: CambioPaginaService,
    private http: HttpClientModule
  ) { }

  ngOnInit(): void {
    this.listaCategorias();
    setTimeout(() => {
      console.log(this.lista);
    }, 4500);
  }



  public onChangeCategoria(){
    console.log("hola")

  }
  public listaCategorias() {
    this.lista = categorias;
  };

  public atras() {
    this.cambio.cambioPagina(this.principal);
  }

  public saveProduct() {
    alert("relaxing cup of café con leche")
  }

}
