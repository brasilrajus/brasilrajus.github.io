import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    public toast: ToastController
  ) { }

  async toastShow(message: string, cssClass: string) {
    const toast = await this.toast.create({
      message: message,
      position: 'bottom',
      cssClass: cssClass,
      duration: 3000
    });
    toast.present();
  }
}
