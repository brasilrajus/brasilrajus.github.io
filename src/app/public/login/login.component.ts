import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { IonSlides } from '@ionic/angular';
import { ApisExternasService } from 'src/app/services/apis-externas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @ViewChild('slides', { static: true }) slides: IonSlides
  @ViewChild('slidesGoogle', { static: true }) slidesGoogle: IonSlides

  public user: any = {};
  public inputPassword: boolean = true;

  constructor(
    private auth: AuthService,
    public load: LoadingService,
    private api: ApisExternasService
  ) {  }

  ngOnInit() { }

  acessarOrRegister(func: string) {
    if (this.user.email != null && this.user.email != undefined && this.user.password != null && this.user.password != undefined) {
      func === 'Acessar' ? this.auth.login(this.user.email, this.user.password) :
        func === 'Recuperar Senha' ? this.auth.recoveryPassword(this.user.email) :
          this.auth.registerUser(this.user.email, this.user.password);
    };

  }

  acessarComGmail() {
    this.auth.loginWithGoogle();
  }

  alternarBotoes(i: number) {
    this.slides.slideTo(i)

    if (i == 0) { 
      this.slidesGoogle.slideTo(0); 
      this.inputPassword = true;
      document.getElementById('button-acessar').style.display = "none";
      document.getElementById('button-recuperar').style.display = "block";
      document.getElementById('button-cadastrar').style.display = "block";
      document.getElementById('input-password').style.display = "block";
    } 
    else if(i == 1) { 
      this.slidesGoogle.slideTo(0);
      this.inputPassword = false; 
      document.getElementById('button-recuperar').style.display = "none";
      document.getElementById('button-acessar').style.display = "block";
      document.getElementById('button-cadastrar').style.display = "block";
      document.getElementById('input-password').style.display = "none";
    }    
    else {
      this.slidesGoogle.slideTo(1);
      this.inputPassword = true;
      document.getElementById('button-cadastrar').style.display = "none";
      document.getElementById('button-acessar').style.display = "block";
      document.getElementById('button-recuperar').style.display = "block";
      document.getElementById('input-password').style.display = "block";
    }
  }

}
