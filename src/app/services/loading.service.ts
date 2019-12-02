import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    public loading: LoadingController
  ) { }

  async loadingGreen(message: string) {
    const loading = await this.loading.create({
      spinner: "bubbles",
      message,
      translucent: true,
      cssClass: 'load_green'
    });
    return await loading.present();
  }
}
