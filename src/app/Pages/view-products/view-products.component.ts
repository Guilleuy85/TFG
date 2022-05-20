import { FirebaseService } from './../../Services/Firebase/firebase.service';
import { CambioPaginaService } from './../../Services/CambioPagina/cambio-pagina.service';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'edix-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {



  products: any;//Declaración de la variable products donde se almacenarán los productos que se envían a Firebase.


  constructor(private firebase: FirebaseService,//Agrego el servicio de BBDD al constructor para poder utilizarse.
    private cambio: CambioPaginaService//Agrego servicio cambio de página para poder utilizarse.
  ) { }

  ngOnInit(): void {//Agrego en el On init el método cargar productos para hacer la lectura de los mismos desde la BBDD.

    this.firebase.cargarProducto().subscribe(productos => {
      console.log(productos);
      this.products = Object.values(productos);
      setTimeout(() => {
        console.log(this.products);
      }, 1000);
    })

  }
  /**
   * Método que nos dirige a la página add al pulsar el botón Agregar otro producto
   */
  public VueltaAAgregar() {
    this.cambio.cambioPagina(2);
  }
  /**
   * Método que nos dirige a la pagina principal al pulsar Principal
   */
  public VueltaAPrincipal() {
    this.cambio.cambioPagina(1);
  }

  public obtenerProductos() {
    return this.firebase.cargarProducto();

  }

}
