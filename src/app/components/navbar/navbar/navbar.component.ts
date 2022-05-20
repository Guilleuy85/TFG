import { CambioPaginaService } from './../../../Services/CambioPagina/cambio-pagina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edix-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pagina: number=3;
  constructor(private cambio:CambioPaginaService) { }

  ngOnInit(): void {
  }

  public cambioPaginaLogin(){
    this.cambio.vueltaALogin();
  }
  public cambioPaginaPrincipal(){
    this.cambio.cambioPagina(1);
  }

  public cambioPaginaAdd(){
    this.cambio.cambioPagina(2);
  }
  public cambioPaginaVisualizar(){
    this.cambio.cambioPagina(3);
  }


}
