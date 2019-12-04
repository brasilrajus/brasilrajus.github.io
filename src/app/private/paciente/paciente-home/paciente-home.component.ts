import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-home',
  templateUrl: './paciente-home.component.html',
  styleUrls: ['./paciente-home.component.scss'],
})
export class PacienteHomeComponent implements OnInit {

  public cardsMenu: any = [
    { title: 'Postos de atendimento', img: '../../../../assets/icons/pharmacy.svg', link: '/postos-atendimento' },
    { title: 'Caixa de ferramentas', img: '../../../../assets/icons/first-aid-box.svg', link: '/caixa-ferramentas' },
    { title: 'Agenda médica', img: '../../../../assets/icons/calendar.svg', link: '/agenda-medica' },
    { title: 'Telefones emergênciais', img: '../../../../assets/icons/emergency-call.svg', link: '/telefones-emergenciais' },
    { title: 'Minhas informações', img: '../../../../assets/icons/browser.svg', link: '/minhas-informacoes' },
    { title: 'Alterar senha', img: '../../../../assets/icons/folders.svg', link: '/alterar-senha' },
  ]

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() { }

  deslogar() {
    this.auth.signOut();
  }

}
