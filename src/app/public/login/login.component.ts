import { Component, OnInit } from '@angular/core';
import { ToastService } from './../../private/functions/toast.service';
import { AuthService } from './../../private/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = {};
  public tabgroup: any = { acessar: true, cadastrar: false, recuperar: false };
  public isValidCPF: boolean = true;
  public btnLogin: string = 'Acessar';
  public gmail: string = 'Acessar com Gmail';
  public oneClick: string = 'Que tal um clique para acessar?';
  public btnAnteriorRecuperar: boolean = true;

  constructor(
    private authService: AuthService,
    public toastCtrl: ToastService
  ) { }

  ngOnInit() { }

  loginOrRecovery() {
    if (this.btnLogin === 'Recuperar senha') {
      this.authService.ForgotPassword(this.user.email);
    } else if (this.btnLogin === 'Acessar') {
      this.authService.SignIn(this.user.email, this.user.senha);
    } else if (this.btnLogin === 'Cadastrar') {
      this.authService.signUp(this.user.email, this.user.senha, this.user);
    }
  };

  GoogleAuth() { this.authService.GoogleAuth() };

  alternarMenus(event) {
    let menu = event.target.innerText
    let inpSenha = document.getElementById('input_senha');
    let inpEmail = document.getElementById('input_email');
    let btnAcessar = document.getElementById('btn_acessar');

    this.btnLogin = menu;

    if (menu === 'Acessar') {
      inpEmail.classList.remove('a-margin-bottom-50');
      btnAcessar.classList.remove('a-margin-top-50');
      inpEmail.classList.add('a-margin-bottom-15');
      btnAcessar.classList.add('a-margin-top-0');
      this.tabgroup = { acessar: true, cadastrar: false, recuperar: false };
      this.gmail = 'Acessar com Gmail';
      setTimeout(() => {
        inpSenha.classList.remove('a-opacity0');
        inpSenha.classList.add('a-opacity1');
        this.oneClick = 'Que tal um clique para acessar?';
      }, 600);
      this.btnAnteriorRecuperar = true;
      
    } else if (menu === 'Recuperar senha') {
      this.btnAnteriorRecuperar = false;
      inpSenha.classList.remove('a-opacity1');
      inpSenha.classList.add('a-opacity0');
      this.tabgroup = { acessar: false, cadastrar: false, recuperar: true };
      this.gmail = 'Acessar com Gmail';
      setTimeout(() => {
        inpEmail.classList.remove('a-margin-bottom-15');
        btnAcessar.classList.remove('a-margin-top-0');
        inpEmail.classList.add('a-margin-bottom-50');
        btnAcessar.classList.add('a-margin-top-50');
        this.oneClick = 'Que tal um clique para acessar?';
      }, 600);

    } else if (menu === 'Cadastrar') {
      if (this.btnAnteriorRecuperar === false) {
        inpEmail.classList.add('a-margin-bottom-15');
        btnAcessar.classList.add('a-margin-top-0');
        setTimeout(() => {
          inpSenha.classList.remove('a-opacity0');
          inpSenha.classList.add('a-opacity1');
        }, 600);
      } else {
        inpEmail.classList.remove('a-margin-bottom-50');
        btnAcessar.classList.remove('a-margin-top-50');
        this.tabgroup = { acessar: false, cadastrar: true, recuperar: false };
        this.gmail = 'Cadastrar com Gmail';
        setTimeout(() => {
          this.oneClick = 'Que tal um clique para cadastrar?';
        }, 600);
      }
      this.btnAnteriorRecuperar = true;
    }
  }

  /* Provavelmente será excluído daqui a baixo */
  verificacaoCPF() {
    console.log(this.user.cpf)
    let strCPF = this.user.cpf;
    let cpfFormatado = this.formatarCPF(strCPF);
    this.user.cpf = cpfFormatado;
  }

  validarCPF(strCPF) {
    let soma: number = 0;
    let resto: number;

    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(strCPF.substring(9, 10))) return false;

    resto = 0;
    for (let i = 1; i <= 10; i++) resto = resto + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    resto = (resto * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }

  formatarCPF(value) {
    value = value.replace(/\D/g, "");
    this.isValidCPF = this.validarCPF(value);
    console.log(this.isValidCPF);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return value;
  }

}
