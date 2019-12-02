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
    private auth: AuthService
  ) { 
    this.mostrarMenus()
  }

  ngOnInit() { }

  deslogar() {
    this.auth.signOut();
  }

  mostrarMenus() {
    let user = new Promise((response, reject) => {
      firebase.auth().currentUser;
    })
    .then(() => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
