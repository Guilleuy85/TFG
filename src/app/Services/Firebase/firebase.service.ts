import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private httpClient:HttpClient) { }


  /**
   * Método del servicio Firebase que conecta a la base de datos y mediante un post sube un producto.
   * @param producto
   */
  guardarProductos(producto: any){

    this.httpClient.post('https://tfgedix-default-rtdb.europe-west1.firebasedatabase.app/datos.json',producto)
    .subscribe(response=>console.log("Se ha guardado el producto"+ response),
    error=> console.log("Error: "+error)



      );
  }
}
