import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postos-atendimento',
  templateUrl: './postos-atendimento.component.html',
  styleUrls: ['./postos-atendimento.component.css']
})
export class PostosAtendimentoComponent implements OnInit {

  postosDeAtendimento:any = [
    { nome: 'Farmácia do trabalhador', endereco: 'Rua do comércio, 45', bairro: 'Centro', lat:'80',  lon: '60',  medicacoesEncontradas: ['Insulina', 'Sulfonilureia', 'meglitinida'] },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' },
    { nome: 'Farmácia São José', endereco: 'Rua do comércio, 45',  bairro: 'Centro', lat:'80', lon: '60' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
