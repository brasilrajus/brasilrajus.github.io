import { HomeGuardService } from './guards/home-guard.service';
import { PacienteGuardsService } from './guards/paciente-guards.service';
import { AgendaMedicaComponent } from './private/paciente/agenda-medica/agenda-medica.component';
import { LoginGuardService } from './guards/login-guard.service';
import { RootHomeComponent } from './private/root/root-home/root-home.component';
import { PrescritorHomeComponent } from './private/prescritor/prescritor-home/prescritor-home.component';
import { AdministradorHomeComponent } from './private/administrador/administrador-home/administrador-home.component';
import { PacienteHomeComponent } from './private/paciente/paciente-home/paciente-home.component';
import { LoginComponent } from './public/login/login.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GroupsHomeComponent } from './private/groups/groups-home/groups-home.component';
import { PreCadastroComponent } from './public/pre-cadastro/pre-cadastro.component';
import { HomePrecadastroComponent } from './public/home-precadastro/home-precadastro.component';
import { PrescritorConsultarUsuariosComponent } from './private/prescritor/prescritor-consultar-usuarios/prescritor-consultar-usuarios.component';
import { PostosDeAtendimentoComponent } from './public/postos-de-atendimento/postos-de-atendimento.component';
import { TelefonesEmergenciaisComponent } from './public/telefones-emergenciais/telefones-emergenciais.component';
import { AdministradorCadastrarPostosComponent } from './private/administrador/administrador-cadastrar-postos/administrador-cadastrar-postos.component';
import { AdministradorGuardsService } from './guards/administrador-guards.service';
import { PrescritorGuardsService } from './guards/prescritor-guards.service';
import { RootGuardsService } from './guards/root-guards.service';
import { PreCadastroGuardsService } from './guards/pre-cadastro-guards.service';
import { HomePreCadastroGuardsService } from './guards/home-pre-cadastro-guards.service';

const routes: Routes = [
  /* Public */
  { path: 'postos-atendimento', component: PostosDeAtendimentoComponent},
  { path: 'telefones-emergenciais', component: TelefonesEmergenciaisComponent},
  
  /* Pré Cadastro */
  { path: 'pre-cadastro', component: PreCadastroComponent, canActivate: [PreCadastroGuardsService]},
  { path: 'home-pre-cadastro', component: HomePrecadastroComponent, canActivate: [HomePreCadastroGuardsService]},
  
  /* Grousp */
  { path: 'home', component: GroupsHomeComponent, canActivate: [HomeGuardService]},
  
  /* Paciente */
  { path: 'paciente', component: PacienteHomeComponent, canActivate: [PacienteGuardsService]},
  { path: 'agenda-medica', component: AgendaMedicaComponent, canActivate: [PacienteGuardsService]},
  
  /* Administrador */
  { path: 'administrador', component: AdministradorHomeComponent, canActivate: [AdministradorGuardsService]},
  { path: 'cadastrar-postos-de-atendimento', component: AdministradorCadastrarPostosComponent, canActivate: [AdministradorGuardsService]},
  
  /* Prescritor */
  { path: 'prescritor', component: PrescritorHomeComponent, canActivate: [PrescritorGuardsService]},
  { path: 'consultar-paciente', component: PrescritorConsultarUsuariosComponent, canActivate: [PrescritorGuardsService]},
  
  /* Root */
  { path: 'root', component: RootHomeComponent, canActivate: [RootGuardsService]},

  /* Base Routs */
  { path: '', component: LoginComponent, pathMatch: 'full', canActivate: [LoginGuardService]},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
