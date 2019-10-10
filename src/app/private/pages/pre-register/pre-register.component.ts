import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { ToastService } from '../../functions/toast.service';
import { CpfService } from '../../validators/cpf.service';
import { TelefoneService } from '../../validators/telefone.service';

@Component({
  selector: 'app-pre-register',
  templateUrl: './pre-register.component.html',
  styleUrls: ['./pre-register.component.css']
})
export class PreRegisterComponent implements OnInit {

  public user: any = {};
  public inputSenha = 'password';
  public visibilityPassword = false;
  public cpfValido: boolean = true;
  public telefoneValido: boolean = true;

  constructor(
    public authService: AuthService,
    private cpfCtrl: CpfService,
    private telCtrl: TelefoneService,
    public toastCtrl: ToastService
  ) {
    this.user = this.authService.userData;
  }

  ngOnInit() { }

  formaterCPF() {
    let cpfFormatado = this.cpfCtrl.formatarCPF(this.user.cpf);
    this.cpfValido = this.cpfCtrl.isValidCPF;
    this.user.cpf = cpfFormatado;
  }
  formatarTel() {
    this.user.telefone = this.telCtrl.formatarTelefone(this.user.telefone);
    let telefoneLenght = this.user.telefone;
    if (telefoneLenght.length < 16) {
      this.telefoneValido = false;
    } else {
      this.telefoneValido = true;
    };
  }

  showPassword() {
    this.visibilityPassword = !this.visibilityPassword;
    if (this.visibilityPassword === true) {
      this.inputSenha = 'text';
    } else {
      this.inputSenha = 'password';
    }
  }

  cadastrar() {
    if (this.user.email === undefined
      || this.user.senha === undefined
      || this.user.cpf === undefined
      || this.user.nomeCompleto === undefined
      || this.user.numeroSus === undefined
      || this.user.telefone === undefined
      || this.telefoneValido === false
      || this.cpfValido === false
    ) {
      this.toastCtrl.ToastError('Por gentileza, corrija os campos incorretos.', 'fechar');
    } else {
      let userRegister = { telefone: this.user.telefone, email: this.user.email, senha: this.user.senha, cpf: this.user.cpf, nomeCompleto: this.user.nomeCompleto, numeroSus: this.user.numeroSus, perfil: 'paciente' };

      this.authService.preRegister(this.user.uid, userRegister);
    }

  }

}
