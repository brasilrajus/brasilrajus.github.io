import { AuthService } from './../../services/auth.service';
import { NavController, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  public ferramentas: any = [
    {nome: 'Medir pressão', link: '', icon: ''},
    {nome: 'Medir glicemia', link: '', icon: ''},
    {nome: 'Acompanhamento água', link: '', icon: ''},
    {nome: 'Caixa ded remédios', link: '', icon: ''},
    {nome: 'Calcular IMC', link: '', icon: ''}
  ] 

  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    public auth: AuthService
  ) { }

  ngOnInit() {}

  navTo(url:string) {
    this.navCtrl.navigateForward(url);
    this.menuCtrl.close();
  }

}
