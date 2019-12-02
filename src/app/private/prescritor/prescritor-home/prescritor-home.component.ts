import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescritor-home',
  templateUrl: './prescritor-home.component.html',
  styleUrls: ['./prescritor-home.component.scss'],
})
export class PrescritorHomeComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {}

  deslogar() {
    this.auth.signOut();
  }

}
