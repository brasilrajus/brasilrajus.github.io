import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-informacoes',
  templateUrl: './minhas-informacoes.component.html',
  styleUrls: ['./minhas-informacoes.component.css']
})
export class MinhasInformacoesComponent implements OnInit {

  public infoUser = {
    nome: 'Nome do usuário', cpf: '07545212584', numeroCartaoPosto: '1235', email: 'usuarios@gmail.com', telefone: '82999999999'
  }

  constructor() { }

  ngOnInit() {
  }

}
