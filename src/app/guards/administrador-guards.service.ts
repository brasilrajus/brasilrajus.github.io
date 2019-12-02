import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, UrlTree, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorGuardsService {

  constructor(
    private navCtrl: NavController,
    private auth: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let perfil = this.auth.verificarPerfil('administrador');
    if (perfil === undefined) {
      this.navCtrl.navigateForward('/home');
      return false;
    } else if (perfil.user.perfil.indexOf('administrador') >= 0) {
      return true
    } else { 
      this.navCtrl.navigateForward('/home');
      return false; 
    }
  }
}
