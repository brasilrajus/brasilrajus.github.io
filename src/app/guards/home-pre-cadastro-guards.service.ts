import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePreCadastroGuardsService {

  constructor(
    private navCtrl: NavController,
    private auth: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let status = this.auth.userData;
    if (status == undefined) {
      this.navCtrl.navigateForward('/home');
      return false;
    } else if (status.user.staus !== 'pré cadastrado') {
      this.navCtrl.navigateForward('/home');
      return false;
    }
    return true
  }
}
