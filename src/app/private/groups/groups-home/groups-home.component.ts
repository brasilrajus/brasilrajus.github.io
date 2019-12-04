import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-groups-home',
  templateUrl: './groups-home.component.html',
  styleUrls: ['./groups-home.component.scss'],
})
export class GroupsHomeComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() { }

  deslogar() {
    this.auth.signOut();
  }

}
