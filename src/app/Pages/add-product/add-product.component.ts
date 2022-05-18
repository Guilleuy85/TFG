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


  //Varíables del producto a guardar.
  data: Product = {
    nombreProducto: undefined,
    descripcionProducto: undefined,
    categoriaProducto: undefined,
    precioCompraProducto: undefined,
    precioVentaProducto: undefined,
    imagen: undefined
  }

  principal: number = 1;//Variable que se envía para el cambio de página.
  lista: Categoria[];


  constructor(
    private loadingService: LoadingService,
    private cambio: CambioPaginaService,
    private http: HttpClientModule
  ) { }

  ngOnInit(): void {
    this.listaCategorias();

  }



  public onChangeCategoria(){
    console.log("Categoría que se ha elegido"+this.data.categoriaProducto);

  }
  public listaCategorias() {
    this.lista = categorias;
  };

  public atras() {
    this.cambio.cambioPagina(this.principal, true);
  }

  public saveProduct() {
    console.log("Nombre: "+this.data.nombreProducto+
                " Categoria: "+this.data.categoriaProducto+
                " Descripcion: "+this.data.descripcionProducto+
                " PrecioCompra: "+this.data.precioCompraProducto+
                " PrecioVenta: "+this.data.precioVentaProducto+
                " Imagen"+ this.data.imagen)

  }

}
