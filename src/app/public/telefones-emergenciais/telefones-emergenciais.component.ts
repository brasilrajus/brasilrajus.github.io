import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telefones-emergenciais',
  templateUrl: './telefones-emergenciais.component.html',
  styleUrls: ['./telefones-emergenciais.component.css']
})
export class TelefonesEmergenciaisComponent implements OnInit {

  telefonesUteis = [
    {instituicao: 'Polícia Militar', numero: '190'},
    {instituicao: 'Corpo de Bombeiros', numero: '193'},
    {instituicao: 'Samu', numero: '192'},
    {instituicao: 'Atendimento a mulher', numero: '180'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
