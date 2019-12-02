import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador-home',
  templateUrl: './administrador-home.component.html',
  styleUrls: ['./administrador-home.component.scss'],
})
export class AdministradorHomeComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {}

  deslogar() {
    this.auth.signOut();
  }

}
