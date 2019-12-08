import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postos-atendimento',
  templateUrl: './postos-atendimento.component.html',
  styleUrls: ['./postos-atendimento.component.scss'],
})
export class PostosAtendimentoComponent implements OnInit {

  public cards:any = [
    {nome: 'Farmácia do trabalhador', endereco: 'Rua Tereza de albuquerque', link: ''},
    {nome: 'Farmácia do trabalhador', endereco: 'Rua Tereza de albuquerque', link: ''},
  ]

  constructor() { }

  ngOnInit() {}

}
