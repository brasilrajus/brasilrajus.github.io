import { PacienteCaixaDeFerramentasComponent } from './private/paciente/paciente-caixa-de-ferramentas/paciente-caixa-de-ferramentas.component';
import { LoginGuardService } from './guards/login-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

/*******************************
 * Componentes 
 *******************************/
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { AgendaMedicaComponent } from './private/paciente/agenda-medica/agenda-medica.component';
import { PrescritorHomeComponent } from './private/prescritor/prescritor-home/prescritor-home.component';
import { AdministradorHomeComponent } from './private/administrador/administrador-home/administrador-home.component';
import { RootHomeComponent } from './private/root/root-home/root-home.component';
import { PacienteHomeComponent } from './private/paciente/paciente-home/paciente-home.component';
import { GroupsHomeComponent } from './private/groups/groups-home/groups-home.component';
import { PreCadastroComponent } from './public/pre-cadastro/pre-cadastro.component';
import { PrescritorConsultarUsuariosComponent } from './private/prescritor/prescritor-consultar-usuarios/prescritor-consultar-usuarios.component';
import { TelefonesEmergenciaisComponent } from './public/telefones-emergenciais/telefones-emergenciais.component';
import { AdministradorCadastrarPostosComponent } from './private/administrador/administrador-cadastrar-postos/administrador-cadastrar-postos.component';
import { HomePrecadastroComponent } from './public/home-precadastro/home-precadastro.component';

/*******************************
 * Services
 *******************************/
import { HomeGuardService } from './guards/home-guard.service';

/*******************************
 * Firebase imports
 *******************************/
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { PostosAtendimentoComponent } from './private/auth/postos-atendimento/postos-atendimento.component';
import { AlterarSenhaComponent } from './private/auth/alterar-senha/alterar-senha.component';
import { MinhasInformacoesComponent } from './private/auth/minhas-informacoes/minhas-informacoes.component';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupsHomeComponent,
    PacienteHomeComponent,
    RootHomeComponent,
    AdministradorHomeComponent,
    PrescritorHomeComponent,
    PreCadastroComponent,
    HomePrecadastroComponent,
    PrescritorConsultarUsuariosComponent,
    TelefonesEmergenciaisComponent,
    AgendaMedicaComponent,
    AdministradorCadastrarPostosComponent,
    PacienteCaixaDeFerramentasComponent,
    PostosAtendimentoComponent,
    AlterarSenhaComponent,
    MinhasInformacoesComponent
  ],
  entryComponents: [],
  imports: [
    FormsModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LoginGuardService,
    HomeGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
