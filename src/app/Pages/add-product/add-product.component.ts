import { FirebaseService } from './../../Services/Firebase/firebase.service';
import { Categoria, categorias } from './../../Models/Categorias';
import { CambioPaginaService } from './../../Services/CambioPagina/cambio-pagina.service';
import { Product } from './../../Models/product.interface';
import { Component, OnInit, } from '@angular/core';



@Component({
  selector: 'edix-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


  /**
   *Objeto data con el formato de models.interface.ts
   *Que utilizaremos para enviar a la BBDD
   *
   */
  data: Product = {
    nombre: undefined,
    descripcion: undefined,
    categoria: undefined,
    precioCompra: undefined,
    precio: undefined,
    cantidad: undefined,
    imagen: undefined,
    fecha: "05-20-2022",
    hora: "20:10:35",
    prod_id: ("05-20-202220:10:35"),
  }

  principal: number = 1;//Variable que se envía para el cambio de página.
  lista: Categoria[];//Variable con el listado de de categorías.


  constructor(
    private cambio: CambioPaginaService,//Importación del servicio cambioPaginaService
    private firebase: FirebaseService//Importación del servicio FirebaseService
  ) { }

  ngOnInit(): void {
    this.listaCategorias();//llamo al método listaCategorías que carga las categorías.
    console.log(this.data.fecha);

  }

  /**
   * Método que transforma la imagen a bit64 que luego se envía a la BBDD
   * y la incluye en la variable imagen.
   */
  public cargarImagen(event: any) {
    let archivo = event.target.files
    let reader = new FileReader();
    reader.readAsDataURL(archivo[0]);
    reader.onloadend = () => {
      this.data.imagen = reader.result;
    }


  }
  /**
   * Método que carga las categorías en la variable lista.
   */
  public listaCategorias() {
    this.lista = categorias;
  };

  /**
   * Método que nos dirige a la página anterior utilizando cambioPaginaService
   */
  public atras() {
    this.cambio.cambioPagina(this.principal);
  }

  /**
   * Método que llama al servicio FirebaseService para envíar a la base de datos el producto
   * y tiene un setTimeOut para borrar los datos luego de ser envíados.
   */
  public saveProduct() {
    this.firebase.guardarProductos(this.data)
    setTimeout(() => {
      this.data.nombre = undefined;
      this.data.categoria = undefined;
      this.data.descripcion = undefined;
      this.data.precioCompra = undefined;
      this.data.precio = undefined;
      this.data.cantidad = undefined;
      this.data.imagen = undefined;

    }, 1000);


  }


}
