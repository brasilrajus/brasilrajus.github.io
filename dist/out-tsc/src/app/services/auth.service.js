import * as tslib_1 from "tslib";
import { ToastService } from './toast.service';
import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { LoadingService } from './loading.service';
import { Router } from '@angular/router';
let AuthService = class AuthService {
    constructor(afs, loadCtrl, load, route, toast) {
        this.afs = afs;
        this.loadCtrl = loadCtrl;
        this.load = load;
        this.route = route;
        this.toast = toast;
        this.auth = firebase.auth();
        this.PacienteAtivo = {
            user: {}
        };
        this.uid = '';
        this.auth.onAuthStateChanged((user) => {
            user ? this.ifConnected(user.uid) : this.ifDisconnected();
        });
    }
    ifConnected(user) {
        this.afs.collection('users').doc(user).valueChanges()
            .subscribe(result => {
            this.uid = user;
            this.userData = result;
            firebase.firestore().collection('users').doc(this.uid).get()
                .then((res) => {
                let status = res.data().user.status;
                status === 'pré cadastrado' ? this.route.navigate(['/home-pre-cadastro']) : console.log('bem vindo');
            })
                .catch((err) => {
                this.route.navigate(['/pre-cadastro']);
            });
        });
    }
    ;
    ifDisconnected() {
        this.route.navigate(['']);
        console.log('is disconected');
    }
    ;
    login(email, password) {
        this.load.loadingGreen('Acessando...');
        let error;
        this.auth.signInWithEmailAndPassword(email, password)
            .then(() => {
            console.log('Logado com sucesso');
            this.loadCtrl.dismiss();
        })
            .catch((err) => {
            switch (err.code) {
                case 'auth/invalid-email':
                    error = 'Email inválido';
                    break;
                case 'auth/wrong-password':
                    error = 'Senha inválida';
                    break;
                case 'auth/user-not-found':
                    error = 'Usuário não encontrado';
                    break;
                case 'auth/user-disabled':
                    error = 'Por gentileza, consulte um posto de atendimento';
                    break;
            }
            this.loadCtrl.dismiss();
            this.toast.toastShow(error, 'toast_red');
        });
    }
    ;
    signOut() {
        this.auth.signOut();
    }
    loginWithGoogle() {
        let provider = new firebase.auth.GoogleAuthProvider();
        this.auth.signInWithPopup(provider)
            .then((result) => {
            let user = result.user;
        })
            .catch((err) => { console.log('Error:', err); });
    }
    ;
    registerUser(email, password) {
        this.auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
            console.log('usuário registrado com sucesso');
        })
            .catch(err => {
            let errorCode = err.code;
            let errorMessage = err.message;
            console.log(errorCode + errorMessage);
        });
    }
    ;
    recoveryPassword(email) {
        this.auth.sendPasswordResetEmail(email)
            .then(() => {
            console.log('Por gentileza, confira seu email para continuar.');
        })
            .catch((err) => {
            console.log(err);
        });
    }
    verifyProfile() {
    }
    postEstabelecimento(estabelecimento, cnpj) {
        let cnpjAdd = cnpj.replace(/\D/g, '');
        firebase.firestore().collection('estabelecimentos').doc(cnpjAdd).get()
            .then((res) => {
            if (res.data() == undefined) {
                delete estabelecimento.nomeValidator;
                delete estabelecimento.cnpjValidator;
                delete estabelecimento.cepValidator;
                delete estabelecimento.enderecoValidator;
                delete estabelecimento.cidadeValidator;
                this.load.loadingGreen('Adicionando estabelecimento');
                this.afs.collection('estabelecimentos').doc(cnpjAdd + '/').set({
                    estabelecimento
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
                this.toast.toastShow('Este CNPJ já está cadastrado!', 'toast_red');
            }
        });
    }
    adicionarUser(user, cpf) {
        delete user.nomeValidator;
        delete user.cpfValidator;
        delete user.emailValidator;
        delete user.telefoneValidator;
        delete user.susValidator;
        user.cpf = user.cpf.replace(/\D/g, '');
        user.sus = user.sus.replace(/\D/g, '');
        user.telefone = user.telefone.replace(/\D/g, '');
        user.status = 'pré cadastrado';
        user.uid = this.uid;
        this.load.loadingGreen('Adicionando paciente');
        this.afs.collection('users').doc(this.uid + '/').set({
            user
        })
            .then(() => {
            this.loadCtrl.dismiss();
            this.toast.toastShow('Pré cadastro efetuado com sucesso', 'toast_green');
        })
            .catch((err) => {
            this.loadCtrl.dismiss();
        });
    }
    consultaPacientePorCPF(cpf) {
        firebase.firestore().collection('users').where('user.cpf', "==", cpf).get()
            .then((snap) => {
            snap.forEach(doc => {
                this.PacienteAtivo = doc.data();
            });
        });
    }
    ativarPaciente() {
        let user = this.PacienteAtivo.user;
        user.status = 'ativado';
        firebase.firestore().collection('users').doc(this.PacienteAtivo.user.uid).update({
            user
        })
            .then(() => {
            console.log('funcionou');
        })
            .catch((err) => {
            console.log(err);
        });
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore,
        LoadingController,
        LoadingService,
        Router,
        ToastService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map