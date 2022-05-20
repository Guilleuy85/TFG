import { CambioPaginaService } from './Services/CambioPagina/cambio-pagina.service';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/Services/Loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading;


  constructor(private loadingService: LoadingService,
              private cambioPaginaService: CambioPaginaService) { }

  ngOnInit() {

 this.cambioPaginaService.checkRoute();

  }

}
