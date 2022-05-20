import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private httpClient: HttpClient) { }


  /**
   * Método del servicio Firebase que conecta a la base de datos y mediante post sube un producto.
   * @param producto
   */
  public guardarProductos(producto: any) {
    this.httpClient.post('https://pickaclothapp-default-rtdb.europe-west1.firebasedatabase.app/Productos.json', producto)
      .subscribe(response => alert("Se ha guardado el producto"),
        error => alert("Hubo un problema al cargar el producto")
      );
  }
  /**
   * Método utilizado para la conexión con la base de datos en este caso para la importación de datos.
   *
   */
  public cargarProducto() {
    return this.httpClient.get('https://pickaclothapp-default-rtdb.europe-west1.firebasedatabase.app/Productos.json');
  }
}
