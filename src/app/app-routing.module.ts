import { AlterarSenhaComponent } from './private/pages/alterar-senha/alterar-senha.component';
import { AgendaComponent } from './private/pages/agenda/agenda.component';
import { MinhasInformacoesComponent } from './private/pages/minhas-informacoes/minhas-informacoes.component';
import { HomePreRegisterComponent } from './private/pages/home-pre-register/home-pre-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { PreRegisterComponent } from './private/pages/pre-register/pre-register.component';
import { HomePacienteComponent } from './private/pages/home-paciente/home-paciente.component';
import { PostosAtendimentoComponent } from './private/pages/postos-atendimento/postos-atendimento.component';
import { TelefonesEmergenciaisComponent } from './public/telefones-emergenciais/telefones-emergenciais.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home-paciente', component: HomePacienteComponent },
  { path: 'home-pre-register', component: HomePreRegisterComponent },
  { path: 'pre-register', component: PreRegisterComponent},
  { path: 'postos-atendimento', component: PostosAtendimentoComponent},
  { path: 'agenda', component: AgendaComponent},
  { path: 'telefones-emergenciais', component: TelefonesEmergenciaisComponent},
  { path: 'minhas-informacoes', component: MinhasInformacoesComponent},
  { path: 'alterar-senha', component: AlterarSenhaComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
