import { CambioPaginaService } from './../../Services/CambioPagina/cambio-pagina.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/Services/Loading/loading.service';


@Component({
  selector: 'edix-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  loading;
  router: Router;
  visualizar:number =3;
  add: number =2;

  constructor(
               private loadingService: LoadingService,
               private cambio: CambioPaginaService,
              ) { }

  ngOnInit(): void {

  }


  public onClickVisualizar (){
    this.cambio.cambioPagina(this.visualizar);
    console.log ("visualizar tocado");

  }
  public onClickAgregar(){
    this.cambio.cambioPagina(this.add);
    console.log ("add tocado");
  }
}
