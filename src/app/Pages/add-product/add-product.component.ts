import { FirebaseService } from './../../Services/Firebase/firebase.service';
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
    nombre: undefined,
    descripcion: undefined,
    categoria: undefined,
    precioCompra: undefined,
    precio: undefined,
    cantidad: undefined,
    imagen: undefined
  }

  principal: number = 1;//Variable que se envía para el cambio de página.
  lista: Categoria[];


  constructor(
    private loadingService: LoadingService,
    private cambio: CambioPaginaService,
    private http: HttpClientModule,
    private firebase:FirebaseService
  ) { }

  ngOnInit(): void {
    this.listaCategorias();

  }



  public onChangeCategoria(){
    console.log("Categoría que se ha elegido"+this.data.categoria);

  }
  public listaCategorias() {
    this.lista = categorias;
  };

  public atras() {
    this.cambio.cambioPagina(this.principal);
  }

  public saveProduct() {
this.firebase.guardarProductos(this.data)
    //this.firebase.guardarProductos(this.data)
    console.log("Nombre: "+this.data.nombre+
                " Categoria: "+this.data.categoria+
                " Descripcion: "+this.data.descripcion+
                " PrecioCompra: "+this.data.precioCompra+
                " PrecioVenta: "+this.data.precio+
                " Cantidad: "+this.data.cantidad+
                " Imagen"+ this.data.imagen);
     alert("Se ha guardado el producto");
     setTimeout(() => {
      this.data.nombre= undefined;
      this.data.categoria=undefined;
      this.data.descripcion=undefined;
      this.data.precioCompra= undefined;
      this.data.precio= undefined;
      this.data.cantidad=undefined;
      this.data.imagen=undefined;

     }, 300);


  }


}
