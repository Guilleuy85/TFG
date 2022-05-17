import { CambioPaginaService } from './../../Services/CambioPagina/cambio-pagina.service';
import { LoadingService } from 'src/app/Services/Loading/loading.service';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'edix-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading;
  router: Router;
  login= 1;

  constructor(
              private loadingService: LoadingService,
              private cambio: CambioPaginaService
              ) { }

  ngOnInit(): void {

  }

  public siguiente (){
    this.cambio.cambioPagina(this.login);

  }

  public noImplementado(){
    alert("Aún no implementado");
  }
}
