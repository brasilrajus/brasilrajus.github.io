import { ToastService } from './toast.service';
import { LoadingController, NavParams } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { LoadingService } from './loading.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: any = firebase.auth();
  public PacienteAtivo: any = {
    user: {}
  };
  public uid: string = '';
  public userData: any

  constructor(
    private afs: AngularFirestore,
    private loadCtrl: LoadingController,
    private load: LoadingService,
    private route: Router,
    private toast: ToastService
  ) {
    this.auth.onAuthStateChanged((user: any) => {
      user ? this.ifConnected(user.uid) : this.ifDisconnected();
    })
  }

  ifConnected(user: any) {
    this.afs.collection('users').doc(user).valueChanges()
      .subscribe(result => {
        this.uid = user;
        this.userData = result;
      });

  };

  ifDisconnected() {
    this.userData = undefined;
  };


  login(email: string, password: string) {
    if (password === '') {
      this.toast.toastShow('Por gentileza, digite sua senha', 'toast_red');
    } else {
      this.load.loadingGreen('Acessando...');
      let error: string;
      this.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('Logado com sucesso');
          this.loadCtrl.dismiss();
        })
        .catch((err) => {
          switch (err.code) {
            case 'auth/invalid-email': error = 'Email inválido'; break;
            case 'auth/wrong-password': error = 'Senha inválida'; break;
            case 'auth/user-not-found': error = 'Usuário não encontrado'; break;
            case 'auth/user-disabled': error = 'Por gentileza, consulte um posto de atendimento'; break
          }
          this.errorConnection(error);
        })
    }
  };

  signOut() {
    this.auth.signOut();
  }

  loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider)
      .then((result) => {
        let user:any= {}
        user.displayName = result.user.displayName;

        this.afs.collection('users/').doc(result.user.uid).set({
          user: {
            displayName: result.user.displayName
          } 
        }, {merge: true})
      })
      .catch((err) => { console.log('Error:', err) });
  };

  registerUser(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.toast.toastShow('Bem vindo ao Rajus Brasil, por gentileza, preencha seu cadastro.', 'toast_green');
      })
      .catch(err => {
        let errorCode = err.code;
        let errorMessage = err.message;
        console.log(errorCode + errorMessage)
      })
  };

  recoveryPassword(email: string) {
    this.auth.sendPasswordResetEmail(email)
      .then(() => {
        console.log('Por gentileza, confira seu email para continuar.')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  adicionarUser(user: any, cpf: string) {

    delete user.nomeValidator;
    delete user.cpfValidator;
    delete user.telefoneValidator;
    delete user.susValidator;
    user.status = 'pré cadastrado';
    user.cpf = user.cpf.replace(/\D/g, '');
    user.sus = user.sus.replace(/\D/g, '');
    user.telefone = user.telefone.replace(/\D/g, '');
    user.uid = this.uid;
    this.load.loadingGreen('Adicionando paciente')

    this.afs.collection('users').doc(this.uid + '/').set({
      user: {
        status: user.status,
        cpf: user.cpf,
        sus: user.sus,
        telefone: user.telefone,
        nome: user.nome,
      }
    }, {merge: true})
      .then(() => {
        this.loadCtrl.dismiss();
        this.toast.toastShow('Pré cadastro efetuado com sucesso', 'toast_green');
        this.route.navigate(['/home-pre-cadastro'])
      })
      .catch((err) => {
        this.loadCtrl.dismiss();
      });
  }

  consultaPacientePorCPF(cpf: string) {
    firebase.firestore().collection('users').where('user.cpf', "==", cpf).get()
      .then((snap) => {
        snap.forEach(doc => {
          this.PacienteAtivo = doc.data();
          console.log(this.PacienteAtivo)
        })
      })
  }

  ativarPaciente() {
    let user = this.PacienteAtivo.user;
    user.status = 'ativado';
    user.perfil = ['paciente'];
    firebase.firestore().collection('users').doc(this.PacienteAtivo.user.uid).update({
      user
    })
      .then(() => {
        console.log('funcionou')
      })
      .catch((err) => {
        console.log(err)
      });
  }

  errorConnection(error: string) {
    setTimeout(() => {
      this.toast.toastShow(error, 'toast_red');
      this.loadCtrl.dismiss();
    }, 200)
  }

  verificarPerfil(perfil: string) {
    return this.userData;
  }

  postEstabelecimento(cnpj: string, nome, cep, bairro, endereco, cidade, numero) {
    console.log(cnpj)
    let cnpjAdd = cnpj.replace(/\D/g, '');

    firebase.firestore().collection('estabelecimentos').doc(cnpjAdd).get()
      .then((res) => {
        if (res.data() == undefined) {
          this.load.loadingGreen('Adicionando estabelecimento')
          this.afs.collection('estabelecimentos').doc(cnpjAdd + '/').set({
            '_nome': nome,
            'cnpj': cnpj,
            'cep': cep,
            'bairro': bairro,
            'endereco': endereco,
            'cidade': cidade,
            'numero': numero
          })
            .then(() => {
              this.loadCtrl.dismiss();
              this.toast.toastShow('Estabelecimento adicionado com sucesso', 'toast_green');
            })
            .catch((err) => {
              this.loadCtrl.dismiss();
            });
        }
        else {
          this.toast.toastShow('Este CNPJ já está cadastrado!', 'toast_red')
        }
      })
  }

  getEstabelecimentosForMedical(remedio: string, estado: string, cidade: string) {
    let estabelecimentosComMedicacao: any = [];
    firebase.firestore().collection('estabelecimentos')
      .where('estado', '==', estado)
      .where('cidade', '==', cidade)
      .where('medicacoes', 'array-contains', remedio)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          estabelecimentosComMedicacao.push(doc.data());
        })
        console.log(estabelecimentosComMedicacao);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
