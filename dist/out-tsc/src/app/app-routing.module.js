import * as tslib_1 from "tslib";
import { LoginGuardService } from './guards/login-guard.service';
import { RootHomeComponent } from './private/root/root-home/root-home.component';
import { PrescritorHomeComponent } from './private/prescritor/prescritor-home/prescritor-home.component';
import { AdministradorHomeComponent } from './private/administrador/administrador-home/administrador-home.component';
import { PacienteHomeComponent } from './private/paciente/paciente-home/paciente-home.component';
import { LoginComponent } from './public/login/login.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { GroupsHomeComponent } from './private/groups/groups-home/groups-home.component';
import { PreCadastroComponent } from './public/pre-cadastro/pre-cadastro.component';
import { HomePrecadastroComponent } from './public/home-precadastro/home-precadastro.component';
import { PrescritorConsultarUsuariosComponent } from './private/prescritor/prescritor-consultar-usuarios/prescritor-consultar-usuarios.component';
import { PostosDeAtendimentoComponent } from './public/postos-de-atendimento/postos-de-atendimento.component';
import { TelefonesEmergenciaisComponent } from './public/telefones-emergenciais/telefones-emergenciais.component';
import { AdministradorCadastrarPostosComponent } from './private/administrador/administrador-cadastrar-postos/administrador-cadastrar-postos.component';
const routes = [
    /* Public */
    { path: '', component: LoginComponent, pathMatch: 'full', canActivate: [LoginGuardService] },
    { path: 'pre-cadastro', component: PreCadastroComponent },
    { path: 'home-pre-cadastro', component: HomePrecadastroComponent },
    { path: 'postos-atendimento', component: PostosDeAtendimentoComponent },
    { path: 'telefones-emergenciais', component: TelefonesEmergenciaisComponent },
    /* Grousp */
    { path: 'home', component: GroupsHomeComponent },
    /* Paciente */
    { path: 'paciente', component: PacienteHomeComponent },
    /* Administrador */
    { path: 'administrador', component: AdministradorHomeComponent },
    { path: 'cadastrar-postos-de-atendimento', component: AdministradorCadastrarPostosComponent },
    /* Prescritor */
    { path: 'prescritor', component: PrescritorHomeComponent },
    { path: 'consultar-paciente', component: PrescritorConsultarUsuariosComponent },
    /* Root */
    { path: 'root', component: RootHomeComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map