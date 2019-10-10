import { AuthService } from './../../authentication/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.component.html',
  styleUrls: ['./home-paciente.component.css']
})
export class HomePacienteComponent implements OnInit {

  constructor(
    public authCtrl: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authCtrl.SignOut();
  }

}
