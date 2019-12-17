import { PushNotificationsService } from './../../../services/push-notifications.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-home',
  templateUrl: './root-home.component.html',
  styleUrls: ['./root-home.component.scss'],
})
export class RootHomeComponent implements OnInit {

  constructor(
    private notification: PushNotificationsService
  ) { }

  ngOnInit() {}


  push () {
    this.notification.webNotification();
  }
}
