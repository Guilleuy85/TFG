import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private httpClient:HttpClient) { }

  guardarProductos(producto: Product[]){
    //Esto está mal.
    this.httpClient.post('gs://tfgedix.appspot.com',producto)
  }
}
