
import { Component,  OnInit } from '@angular/core';
import { productos } from 'src/app/Models/product.interface';




@Component({
  selector: 'edix-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {

  products = productos;

  constructor() { }

  ngOnInit(): void {

  }

}
