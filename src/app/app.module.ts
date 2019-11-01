/* Módulos Básicos */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

/* Componentes */
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { HomePreRegisterComponent } from './private/pages/home-pre-register/home-pre-register.component';
import { PreRegisterComponent } from './private/pages/pre-register/pre-register.component';
import { MinhasInformacoesComponent } from './private/pages/minhas-informacoes/minhas-informacoes.component';
import { HomePacienteComponent } from './private/pages/home-paciente/home-paciente.component';
import { PostosAtendimentoComponent } from './private/pages/postos-atendimento/postos-atendimento.component';
import { TelefonesEmergenciaisComponent } from './public/telefones-emergenciais/telefones-emergenciais.component';

/* Angular Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AgendaComponent } from './private/pages/agenda/agenda.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { AlterarSenhaComponent } from './private/pages/alterar-senha/alterar-senha.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePreRegisterComponent,
    PreRegisterComponent,
    AgendaComponent,
    MinhasInformacoesComponent,
    HomePacienteComponent,
    PostosAtendimentoComponent,
    TelefonesEmergenciaisComponent,
    AlterarSenhaComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase), BrowserAnimationsModule, AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    MatSnackBarModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
