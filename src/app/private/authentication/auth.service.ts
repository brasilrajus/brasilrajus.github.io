import { Injectable, NgZone } from '@angular/core';
import { ToastService } from './../functions/toast.service';

import { User } from './user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any = [];
  public userLogado: any = [];
  public userData: any = { email: '', displayName: '' };

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public toastCtrl: ToastService
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
        this.usuarioLogado();
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));;
        this.usuarioDeslogado();
      }
    });
  }
  usuarioLogado() {
    this.router.navigate(['/home-paciente']);
    this.toastCtrl.ToastSucess('Seja bem vindo(a) ' + this.userData.displayName, 'Fechar');
  }
  usuarioDeslogado() {
    this.router.navigate(['/']);
  }

  // Acessar com login e senha
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/home-paciente']);
          console.log('logado com sucesso: Ir para home');
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Cadastrar usuário
  async signUp(email: string, senha: string, user: object) {
    try {
      const newUser = await this.afAuth.auth.createUserWithEmailAndPassword(email, senha);
      await this.afs.collection('Users').doc(newUser.user.uid).set(user);
      this.SendVerificationMail()
    } catch (error) {
      console.log(error);
    }
  }

  // Atualizar Usuário
  preRegister(uid, user) {
    this.afs.collection('Users').doc(uid).set(user).then(() => {
      this.toastCtrl.ToastSucess('Registro finalizado.', 'fechar');
    });
  }

  // Enviar verificação de email
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.toastCtrl.ToastSucess('Acesse seu email para verificação da conta', 'Fechar');
        //        this.router.navigate(['verify-email-address']);
        console.log('email de verificação enviado');
      })
  }

  // Resetar senha
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.toastCtrl.ToastSucess('Confira seu email para resetar sua senha', 'Fechar');
      }).catch((error) => {
        let erro: string;
        switch (error.code) {
          case 'auth/invalid-email':
            erro = 'Este não é um email válido'; break;
        }
        this.toastCtrl.ToastError(erro, 'Fechar');
      });
  }

  // Retorna verdadeiro quando está logado e tem o email. autenticado
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Logar com google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider())
      .then((result) => {

      });

  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/home-paciente']);
        })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    });
  }

  // Sign out 
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
      this.toastCtrl.ToastSucess('Obrigado e volte sempre', 'Sair');
    })
  }
}
