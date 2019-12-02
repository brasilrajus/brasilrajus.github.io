import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-home',
  templateUrl: './paciente-home.component.html',
  styleUrls: ['./paciente-home.component.scss'],
})
export class PacienteHomeComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {}

  deslogar() {
    this.auth.signOut();
  }

}
