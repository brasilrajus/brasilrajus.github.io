import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class PreCadastroGuardsService implements CanActivate {

  constructor(
    private route: Router,
    public afAuth: AngularFireAuth
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     return new Promise((resolve, reject) => {
      this.afAuth.user.subscribe((user) => {
        if (!user) {
          console.log(user)
          this.route.navigate(['/']);
          resolve(false);
        } else {
          firebase.firestore().collection('users').doc(user.uid).get()
            .then((res) => {
              res.data().user.status === undefined ? resolve(true) : this.route.navigate(['/home']); resolve(false);
            })
            .catch(() => {
              resolve(true);
            })
        }
      })
    }); 
  }
}