import { PushNotificationsService } from './../../../services/push-notifications.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-home',
  templateUrl: './groups-home.component.html',
  styleUrls: ['./groups-home.component.scss'],
})
export class GroupsHomeComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private push: PushNotificationsService
  ) { }

  ngOnInit() { }

  deslogar() {
    this.auth.signOut();
  }

}
