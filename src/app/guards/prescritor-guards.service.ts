import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRouteSnapshot, UrlTree, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class PrescritorGuardsService {

  constructor(
    private navCtrl: NavController,
    public afAuth: AngularFireAuth
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      this.afAuth.user.subscribe((user) => {
        if (!user) {
          this.navCtrl.navigateForward(['']);
          resolve(false);
        } else {
          firebase.firestore().collection('users').doc(user.uid).get()
            .then((res) => {
              let perfil = res.data().user.perfil;
              console.log(perfil)
              perfil.indexOf('prescritor') >= 0 ? resolve(true) : this.navCtrl.navigateForward(['']); resolve(false)
            })
            .catch(() => {
              this.navCtrl.navigateForward(['/'])
            })
        }
      })
    });
  }
}
