import { ToastService } from './../../../services/toast.service';
import { AuthService } from './../../../services/auth.service';
import { ValidatorsService } from './../../../services/validators.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-prescritor-consultar-usuarios',
  templateUrl: './prescritor-consultar-usuarios.component.html',
  styleUrls: ['./prescritor-consultar-usuarios.component.scss'],
})
export class PrescritorConsultarUsuariosComponent implements OnInit {

  @ViewChild(IonSlides, { static: true }) slides: IonSlides

  public inputsPrescritor: boolean = false;
  public informacoesMedicas: any  = {}

  public paciente: any = {
    cpfValidator: 'validate_base'
  };

  constructor(
    private validator: ValidatorsService,
    public auth: AuthService,
    private toast: ToastService
  ) { }

  ngOnInit() { }

  validarCpf() {
    this.paciente.cpf = this.validator.formatarCPF(this.paciente.cpf.replace(/\D/g, ''));
    let paciente = this.paciente.cpf.replace(/\D/g, '');
    this.validator.validarCPF(paciente) ? this.paciente.cpfValidator = 'validate_true' : this.paciente.cpfValidator = 'validate_false'
  }

  consultar() {
    this.auth.consultaPacientePorCPF(this.paciente.cpf.replace(/\D/g, ''));
  }

  ativarUsuario() {
    this.auth.ativarPaciente();
  }

  atendimento(etapa: string) {
    etapa == 'inicio' ? this.slides.slideNext() : 
    etapa == 'toMedicacoes' ? this.slides.slideNext() : 
    etapa == 'return' ? this.slides.slidePrev() : console.log();
  }

  atualizarInformacoes(etapa:string) {
    etapa === 'iniciar' ? this.inputsPrescritor = true :
    etapa === 'finalizar' ? console.log('finalizado') : console.log('error');
  }
}
