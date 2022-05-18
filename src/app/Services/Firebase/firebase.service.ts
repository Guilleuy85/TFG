import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private httpClient:HttpClient) { }

  guardarProductos(producto: any){
    //Esto está mal.
    this.httpClient.post('https://tfgedix-default-rtdb.europe-west1.firebasedatabase.app/datos.json',producto)
  }
}
