import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardService implements CanActivate {

  constructor(
    private route: Router,
    public afAuth: AngularFireAuth
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      this.afAuth.user.subscribe((user) => {
        if (!user) {
          this.route.navigate(['/']);
          resolve(false);
        } else {

          firebase.firestore().collection('users').doc(user.uid).get()
            .then((res) => {
              let status = res.data().user.status;
              let perfil = res.data().user.perfil;

              status === undefined ? this.route.navigate(['/pre-cadastro']) :
                status === 'pré cadastrado' ? this.route.navigate(['/home-pre-cadastro']) :
                  perfil.length === 1 ? this.route.navigate(['/' + perfil]) : resolve(true);
            })
        }
      })
    });
  }
}
