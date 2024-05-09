import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseError } from 'firebase/app';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: firebase.User | undefined;
  constructor(
    public ngFireAuth: AngularFireAuth,
    public toastController: ToastController,
    public router: Router
  ) {}
  async register(email: string, password: string) {
    return await this.ngFireAuth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        this.presentAlert(err);
      })
      .then(() => {
        this.ngFireAuth.authState.subscribe((user) => {
          if (user) {
            this.user = user;
            this.router.navigate(['/tabs/tab1']);
          }
        });
      });
  }
  async presentAlert(reason: any) {
    const alert = await this.toastController.create({
      message: reason,
      duration: 3000,
    });
    await alert.present();
  }
  async login(email: string, password: string) {
    return await this.ngFireAuth
      .signInWithEmailAndPassword(email, password)
      .catch((err: FirebaseError) => {
        this.presentAlert(err.message);
      })
      .then(() => {
        this.ngFireAuth.authState.subscribe((user) => {
          if (user) {
            this.user = user;
            this.router.navigate(['/tabs/tab1']);
          }
        });
      });
  }
  async logout() {
    return await this.ngFireAuth.signOut();
  }
  async getCurrentUser() {
    return await this.ngFireAuth.currentUser;
  }
  async sendPasswordResetEmail(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email);
  }
}
