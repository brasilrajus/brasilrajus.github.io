import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-medica',
  templateUrl: './agenda-medica.component.html',
  styleUrls: ['./agenda-medica.component.scss'],
})
export class AgendaMedicaComponent implements OnInit {

  public agenda: any = [
    {data: '20/12', hora: '14:00', medicacao: 'paracetamol', posologia: '1 comprimido'},
    {data: '20/12', hora: '16:00', medicacao: 'paracetamol líquido', posologia: '20 ml'},
    {data: '20/12', hora: '18:00', medicacao: 'paracetamol', posologia: '1 comprimido'},
    {data: '20/12', hora: '20:00', medicacao: 'paracetamol líquido', posologia: '20 ml'},
  ]

  constructor() { }

  ngOnInit() {}

}
