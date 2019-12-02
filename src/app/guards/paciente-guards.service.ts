import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteGuardsService {

  constructor(
    private navCtrl: NavController,
    private auth: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let perfil = this.auth.verificarPerfil('paciente');
    if (perfil === undefined) {
      this.navCtrl.navigateForward('/home');
      return false;
    } else if (perfil.user.perfil.indexOf('paciente') >= 0) {
      return true
    } else { 
      this.navCtrl.navigateForward('/home');
      return false; 
    }
  }
}
