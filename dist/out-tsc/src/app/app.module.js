import * as tslib_1 from "tslib";
import { MinhasInformacoesComponent } from './private/paciente/minhas-informacoes/minhas-informacoes.component';
import { AlterarSenhaComponent } from './private/paciente/alterar-senha/alterar-senha.component';
import { AgendaMedicaComponent } from './private/paciente/agenda-medica/agenda-medica.component';
import { LoginGuardService } from './guards/login-guard.service';
import { PrescritorCadastrarPostosComponent } from './private/prescritor/prescritor-cadastrar-postos/prescritor-cadastrar-postos.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
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
import { PrescritorHomeComponent } from './private/prescritor/prescritor-home/prescritor-home.component';
import { AdministradorHomeComponent } from './private/administrador/administrador-home/administrador-home.component';
import { RootHomeComponent } from './private/root/root-home/root-home.component';
import { PacienteHomeComponent } from './private/paciente/paciente-home/paciente-home.component';
import { GroupsHomeComponent } from './private/groups/groups-home/groups-home.component';
import { PreCadastroComponent } from './public/pre-cadastro/pre-cadastro.component';
/*******************************
 * Firebase imports
 *******************************/
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { HomeGuardService } from './guards/home-guard.service';
import { HomePrecadastroComponent } from './public/home-precadastro/home-precadastro.component';
import { PrescritorConsultarUsuariosComponent } from './private/prescritor/prescritor-consultar-usuarios/prescritor-consultar-usuarios.component';
import { PostosDeAtendimentoComponent } from './public/postos-de-atendimento/postos-de-atendimento.component';
import { TelefonesEmergenciaisComponent } from './public/telefones-emergenciais/telefones-emergenciais.component';
firebase.initializeApp(environment.firebase);
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            GroupsHomeComponent,
            PacienteHomeComponent,
            RootHomeComponent,
            AdministradorHomeComponent,
            PrescritorHomeComponent,
            PrescritorCadastrarPostosComponent,
            PreCadastroComponent,
            HomePrecadastroComponent,
            PrescritorConsultarUsuariosComponent,
            PostosDeAtendimentoComponent,
            TelefonesEmergenciaisComponent,
            AgendaMedicaComponent,
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
            AngularFireAuthModule
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map