import { CambioPaginaService } from './Services/CambioPagina/cambio-pagina.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  constructor(
              private cambioPaginaService: CambioPaginaService) { }

  ngOnInit() {

 this.cambioPaginaService.checkRoute();

  }

}
