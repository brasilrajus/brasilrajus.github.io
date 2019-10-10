import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AgendaComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Data', 'Horário', 'Medicação', 'Conclusão'];
  expandedElement: PeriodicElement | null;

  constructor() { }

  ngOnInit() {
  }

}
export interface PeriodicElement {
  id: number;
  Data: string;
  Horário: string;
  Medicação: string;
  description: string;
  Conclusão: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Data: '20/10',
    id: 1,
    Horário: '18:30',
    Medicação: 'Insulina',
    description: `Posologia: 1 Dosagem a cada 04 horas`,
    Conclusão: 'Já tomado',
  },
  {
    Data: '20/10',
    id: 1,
    Horário: '22:30',
    Medicação: 'Insulina',
    description: `Posologia: 1 Dosagem a cada 04 horas`,
    Conclusão: 'Já tomado',
  },
  {
    Data: '21/10',
    id: 1,
    Horário: '02:30',
    Medicação: 'Insulina',
    description: `Posologia: 1 Dosagem a cada 04 horas`,
    Conclusão: 'Já tomado',
  },

];
