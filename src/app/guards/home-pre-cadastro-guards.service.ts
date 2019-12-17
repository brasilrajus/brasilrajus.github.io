import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRouteSnapshot, UrlTree, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class HomePreCadastroGuardsService {

  constructor(
    private navCtrl: NavController,
    public afAuth: AngularFireAuth
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      this.afAuth.user.subscribe((user) => {
        if (!user) {
          console.log('usuário deslogado')
          this.navCtrl.navigateForward(['/']);
          resolve(false);
        } else {
          firebase.firestore().collection('users').doc(user.uid).get()
            .then((res) => {
              console.log('usuário logado')
              let status = res.data().user.status;
              status === 'pré cadastrado' ? resolve(true) : this.navCtrl.navigateForward('/home'); resolve(false);
            })
        }
      })
    });
  }
}
